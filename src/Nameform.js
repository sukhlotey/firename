import React, { useState } from 'react'

export const Nameform = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    });
    let name, value;
    const yes = (e) => {
        name = e.target.name;
        value = e.target.value
        setUser({ ...user, [name]: value });
    }

    const submitForm = async (event) => {
        event.preventDefault();
        // const { name, email, phone } = user;

        if (user.name && user.email && user.phone) {
            const res = await fetch("https://firename-5ec32-default-rtdb.firebaseio.com/firename.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                    })
                })
            if (res) {
                setUser({
                    name: "",
                    email: "",
                    phone: "",
                });
                alert("Data Stored!")
            }
        }
        else {
            alert("Please Fill All Columns!")
        }

    }

    return (
        <div className='container'>
<h1 className='h1-top'>Data Post to Firebase real-time database
</h1>
            <div className="inputWrapper">
                <form method='POST'>
                    <input
                        name="name"
                        placeholder="enter name"
                        type="text"
                        value={user.name}
                        onChange={yes}
                        autoComplete="off"
                        required />
                    <br />
                    <br />
                    <input
                        name="email"
                        placeholder="enter email"
                        type="email"
                        value={user.email}
                        onChange={yes}
                        autoComplete="off"
                        required />
                    <br />
                    <br />
                    <input
                        name="phone"
                        type="tel"
                        placeholder="phone"
                        value={user.phone}
                        autoComplete="off"
                        onChange={yes}
                    />
                    <br />

                    <button className='btn-1' onClick={submitForm}>SUBMIT</button>
                </form>

            </div>

        </div>
    )
}
