import React, { useState} from "react";
import Cookie from './Cookie.png';
import Monster from './Cookie_Monster.webp';


function Login() {
    
    const [user, setUser] = useState({
        Salt: '',
        Username: '',
        Password: ''
    });

    function handleChange(e) {
        const { value } = e.target;
        setUser({
            ...user,
            [e.target.name]: value
        });
    }

    // function login(){
    //     if(user.Username.replace(/\s/g, '') === ""){
    //         return (
    //             alert("Alert!")
    //         );
    //     }else{
    //         axios.get(`http://localhost:4444/api/get-user/${user.Username}`).then(
    //             function({data}){
    //                 if(data.Password === user.Password){
    //                     console.log("Match")
    //                 } else {
    //                     console.log("NO MATCH")
    //                 }
    //             }
    //         ).catch(
    //             function(error){
    //                 console.log(error)
    //             }
    //         )
    //     }
    // }

    return (
        <div className='bg-cookie-white'>
            <div className='flex flex-col md:flex-row h-screen items-center'>
                <div className='flex items-center justify-center w-full md:w-1/2 xl:w-1/3 md:mx-auto px-6 lg:px-16 xl:px-12'>
                    <div className='w-4/5 h-100'>
                        <div className='font-bold text-4xl text-black '>Welcome to your
                            <div className='inline-block pl-4 text-cookie-hazel text-left'>
                                <h1>Cookie</h1>
                                <h1>Decrumbler</h1>
                            </div>
                        </div>
                        <h2 className='mt-6 font-medium text-lg'>Something inspirational inserted here to motivate you to work!</h2>
                        <div className='mt-10'>
                            <div>
                                <label className='block pl-1 text-xl'>Username</label>
                                <input type='text' className='px-4 py-3 mt-2 w-full rounded-sm border-2 bg-cookie-dull/20 border-cookie-brown hover:bg-cookie-white hover:border-cookie-hazel bg-cookie-white focus:border-cookie-hazel focus:bg-cookie-white focus:outline-none'
                                value={user.Username} onChange={handleChange} name='Username'/>
                            </div>

                            <div className='mt-4'>
                                <label className='block pl-1 text-xl'>Password</label>
                                <input type='password' className='px-4 py-3 mt-2 w-full rounded-sm border-2 bg-cookie-dull/20 border-cookie-brown hover:bg-cookie-white hover:border-cookie-hazel bg-cookie-white focus:border-cookie-hazel focus:bg-cookie-white focus:outline-none.'
                                value={user.Password} onChange={handleChange} name='Password'/>
                            </div>
                            
                            <div className='pt-20'>
                                <button type='button' className='text-white bg-cookie-brown font-medium rounded-md text-2xl w-full p-3 mt-5 text-cookie-dull'>Login</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='flex items-center justify-center h-[95%] hidden bg-cookie-dull/20 w-1/2 lg:block xl:w-2/3 m-10 rounded-3xl p-20 bg-blob bg-cover overflow-hidden relative'>
                    {/* <img src={Cookie} className="w-[80%] absolute -bottom-96 -right-96 opacity-75"></img> */}
                    <div className="w-[80%] h-full hidden 2xl:block m-auto rounded-3xl bg-cookie-white/50 shadow-lg backdrop-blur-sm border-2 border-white overflow-hidden" >
                        <h1 className=' text-cookie-brown font-bold w-1/2 text-3xl p-20 hidden 2xl:block'>“Something cool here a quote from one of us or something” - C Monster</h1>
                        <img src={Cookie} className=" absolute -bottom-96 -right-96"></img>
                        {/* <img src={Monster} className="w-[65%] absolute -bottom-80 -left-46"></img> */}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Login