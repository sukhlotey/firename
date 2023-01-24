import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './Firebase-config'
export const DiffWayAuth = () => {


    const [signUp, setsignUp] = useState("");
    const [signPass, setSignPass] = useState("");
    const [loginUser, setLoginUser] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [currUser, setCurrUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setCurrUser(currentUser);
    });


    const signUpp = async () => {
        // eveType.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                signUp,
                signPass
            );
            console.log(user);
        }
        catch (err) {
            console.log(err.message);
        };
    };
    const loginYou = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginUser,
                loginPassword,
            );
            console.log(user);
        }
        catch (err) {
            console.log(err.message);
        };
    };


    const logOut = async () => {
        await signOut(auth);
    }


    return (
        <div className='container-3'>
            <h1>Authentication with other way in Firebase</h1>
            <div className="input-wrapper-2">
                <h3>Log In</h3>
                <form >
                    <input type="email"
                        placeholder='email'
                        value={loginUser}
                        onChange={(e) => { setLoginUser(e.target.value) }}
                    />
                    <input type="password"
                        placeholder='Password'
                        value={loginPassword}
                        onChange={(e) => { setLoginPassword(e.target.value) }}
                    />
                    <button className='btn-dL' onClick={loginYou}>Log In</button>
                </form>
                <h3> Sign Up </h3>
                <form>
                    <input type="email"
                        placeholder='email'
                        value={signUp}
                        onChange={(e) => { setsignUp(e.target.value) }}
                    />
                    <input type="password"
                        placeholder='Password'
                        value={signPass}
                        onChange={(e) => { setSignPass(e.target.value) }}
                    />
                    <button className='btn-dS' onClick={signUpp}>Sign Up</button>
                    <br /><br />
                    <h4>User Email: {currUser?.email}</h4>
                    <button className='btn-dOut' onClick={logOut}>Sign Out</button>
                </form>
            </div>
        </div>
    )
}
