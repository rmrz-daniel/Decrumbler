import React, { useState } from 'react'
// import axios from 'axios'

function Login(props) {
    const [userInput, setUserInput] = useState();
    const [passInput, setPassInput] = useState();

    const onChangeUser = (e) => {
        const {value } = e.target;
        setUserInput(value);
    };

    const onChangePassword = (e) => {
        const {value } = e.target;
        setPassInput(value);
    };

    const getPass = (e) => {
        e.preventDefault();

        // if (passInput === undefined || userInput === undefined || passInput === "" || userInput === "") {
        //     alert('You must be logged in to continue');
        //     return;
        // }

        // axios.get("http://localhost:5000/api/user/get-user/" + userInput).then(({ data }) => {
        //     if (data.active === false || data.password !== passInput) {
        //         alert("There was a problem, try again");
        //         return;
        //     }
        //     else {
        //         alert('Login successful');
        //         props.setSigned(true);
        //         props.setUser(data);
        //     }
        // }).catch((error) => {
        //     console.log(error);
        // });

    }

    return (
        <div className='logIn'>
            <div className='brand-box'>
                <img className='logo-img'
                    alt='InHome Logo'
                    src={require('../img/twocookie_cd.png')}
                    width={'100px'} />
                <div className='brand-text'>
                    <h1>Welcome Back!</h1>
                    <h2>Sign in</h2>
                </div>
            </div>

            <form onSubmit={getPass}>

                <form className="mb-3">
                    <label> User </label>
                    <input type="text" placeholder={'username'} onChange={onChangeUser} />
                </form>

                <form className="mb-3">
                    <label> Pass </label>
                    <input type="password" placeholder={'password'} onChange={onChangePassword} />
                </form>

                <button variant="primary" type="submit" >
                    Login
                </button>

            </form>
        </div>
    )
}

export default Login