import React, { useEffect, useState } from 'react'
import './AuthCss.css';
import { auth } from './Firebase-config'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
export const AuthEmailPass = () => {

    const [loginUser, setLoginUser] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [signUser, setSignUser] = useState("");
    const [signPass, setSignPass] = useState("");
    const [authUser, setAuthUser] = useState(null);

    // for Log In
    const logIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, loginUser, loginPass).then((res) => {
            console.log(res);
        })
            .catch((error) => {
                console.log(error)
            })
    }
    //for Sign Up
    const signUp = (eve) => {
        eve.preventDefault();
        createUserWithEmailAndPassword(auth, signUser, signPass).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    };

    //Auth details

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            }
            else {
                setAuthUser(null);
            }
        })
        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successfully')
                .catch(er => { console.log(er) })
        })
    }
    return (
        <div className='container-2'>
            <h1>Authentication with Firebase</h1>
            <div className="input-wrapper">
                <form onSubmit={logIn}>
                    <h3>Log In</h3>
                    <input
                        type="email"
                        value={loginUser}
                        onChange={(event) => { setLoginUser(event.target.value) }}
                        placeholder="email"
                        autoComplete='off'

                    />
                    <input
                        type="password"
                        value={loginPass}
                        onChange={(event) => { setLoginPass(event.target.value) }}
                        placeholder="password"
                        autoComplete='off'
                    />
                    <button type='submit' className='auth-btn-1'>Log In</button>
                </form>
                <br /><br />
                <h3>Sign Up</h3>
                <form onSubmit={signUp}>
                    <input
                        type="email"
                        value={signUser}
                        onChange={(event) => setSignUser(event.target.value)}
                        placeholder="enter"
                        autoComplete='off'

                    />
                    <input
                        type="password"
                        value={signPass}
                        placeholder="password"
                        onChange={(event) => setSignPass(event.target.value)}
                        autoComplete='off'

                    />
                    <button type="submit" className='auth-btn-2'>Sign Up</button>
                    <br /><br />
                    {authUser ? <p>{`User Email: ${authUser.email}`}</p> : <p>Signed Out</p>}
                    <button onClick={userSignOut} className='out-btn'>Sign Out</button>
                </form>

            </div>
        </div>
    )
}
