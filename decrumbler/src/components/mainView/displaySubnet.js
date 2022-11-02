import React from "react";

function DisplaySubnet() {
    return (
        <div className='bg-cookie-white'>
            <div className='flex flex-row h-screen '>
                <div className='flex items-center justify-center  w-15  2xl:w-1/6'>
                    Hello
                </div>
                <div className="w-[1px] h-screen bg-cookie-brown"></div>
                <div className='flex flex-col items-center h-screen  w-full '>
                    <div className="flex flex-row w-full bg-cookie-brown h-10 items-center ">
                        Hello
                    </div>
                    <div className="flex flex-row w-11/12 justify-start">
                        <div className="px-4 py-3 my-5 w-20 rounded-l-md bg-cookie-brown/20">Icon</div>
                        <input type='text' placeholder="Search and Filter" className='pr-4 py-3 my-5 w-2/5 rounded-r-md  bg-cookie-brown/20 focus:outline-none'/>
                        <div className="flex flex-row w-full justify-end">
                            <button type='button' className='justify-self-end bg-cookie-brown/20 font-medium rounded-md w-32  px-4 py-3 m-5'>Import</button>
                            <button type='button' className='justify-self-end bg-cookie-brown/20 font-medium rounded-md w-32 px-4 py-3 my-5'>Export</button>
                        </div>

                    </div>
                    <div className="flex flex-col w-full h-full 2xl:w-11/12 border rounded-t-lg border-cookie-brown items-center">
                        <div className="flex flex-row w-full bg-cookie-hazel/70 rounded-t-lg h-10 items-center justify-start text-cookie-brown">
                            <p className="px-14 font-medium text-xl">Name</p>
                            <p className="px-14 font-medium text-xl">Subnet</p>
                            <p className="px-14 font-medium text-xl">VLAN</p>
                            <p className="px-14 font-medium text-xl">VRF</p>
                            <p className="px-14 font-medium text-xl">GW</p>
                            <p className="px-14 font-medium text-xl">Location</p>
                            <p className="px-14 font-medium text-xl">Status</p>
                            <p className="px-14 font-medium text-xl">Last Pinged</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default DisplaySubnet;