import React from 'react'

function Login() {
    return (
        <div>
            <div className="grid grid-cols-2 grid-flow-col gap-0">
                {/* Left Screen */}
                <div className='bg-red-500 h-screen'>

                </div>
                {/* Right Screen */}
                <div className='bg-blue-500 h-screen'>
                    <div className='container mx-auto mt-10 bg-pink-500 w-[80%] h-[95%]'>
                        <h1 className='ml-auto text-right text-3xl font-bold w-[57%]'>“Something cool here a quote from one of us or something” - C Monster</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login