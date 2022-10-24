import React from 'react'

function Login() {
    return (
<div className='bg-cookie-white'>
            <div className="grid grid-cols-2 grid-flow-col gap-0">
                {/* Left Screen / */}
                <div className=' h-screen'>
                    <div className='container mx-auto mt-10  w-[80%] h-[90%]'>
                        <div className='grid grid-rows-2 m-5 grid-flow-rows gap-10 h-full'>
                            <div className=''>
                                <div className='grid grid-rows-2 m-5 grid-flow-rows gap-7 h-[90%]'>
                                    <div className=''>
                                        <p>New island? setup</p>
                                        <p className='font-bold text-4xl pt-[6rem]'>Welcome to your</p>
                                    </div>
                                    <div className='font-medium text-2xl'>
                                        <p>Something inspirational inserted here to motivate you to work!  </p>
                                    </div>
                                </div>
                            </div>

                            <div className=''>
                               <div className=' m-5 h-[90%] '>
                                    <p className='font-medium text-cookie-hazel ml-6 '>username</p>
                                    <input type='text' className='block p-4 w-full rounded-md border-4 hover:border-cookie-hazel border-cookie-brown bg-cookie-white focus:outline-none'/>
                                    <p className='font-medium text-cookie-hazel mt-10 ml-6'>password</p>
                                    <input type='text' className='block p-4 w-full rounded-md border-4 hover:border-cookie-hazel border-cookie-brown bg-cookie-white focus:outline-none'/>
                                    <button type="button" class="text-white bg-cookie-brown font-medium rounded-md text-2xl w-full p-3 mt-5 text-cookie-hazel">Login</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Screen  */}
                <div className=' h-screen'>
                    <div className='container mx-auto mt-10 bg-pink-500 w-[80%] h-[95%]'>
                        <h1 className='ml-auto text-right text-3xl font-bold w-[57%]'>“Something cool here a quote from one of us or something” - C Monster</h1>
                      
                    </div>
                </div>
                  {/* <img src={logo} className='absolute top-50 bottom-50 w-[100rem] h-[100rem]' /> */}
            </div>
        </div>
    )
}

export default Login