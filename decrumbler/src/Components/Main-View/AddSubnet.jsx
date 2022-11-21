import React, {useState, useEffect} from "react";
import { db } from '../../db';

function AddSubnet() {

    const [newSubnet, setNewSubnet] = useState({
        collection: '',
        subnet: '',
        vlan: '',
        vrf: '',
        gw: '',
        location: '',
        state: '',
    });

    function handleChange(e) {
        const { value } = e.target;
        setNewSubnet({
            ...newSubnet,
            [e.target.name]: value
        });
    }



    // async function addFriend() {
    //     try {
    //         await db.subnet.add({
    //             "collection" : "17-34",
    //             "name": "testname2",
    //             "subnet": "testsubnet2",
    //             "vlan": "testvlan2",
    //             "vrf": "testvrf2",
    //             "gw": "testgws2",
    //             "location": "testlocations2",
    //             "state": "0"
    //         });
    //     } catch (error) {
    //     }
    // }

    return (
        <>
            <div className="flex flex-row w-full bg-cookie-brown text-cookie-white h-10 items-center ">
                <p className="px-5">Add Subnet</p>
            </div>
            <div className='p-5'/>
            <div className="w-full h-full 2xl:w-11/12 border rounded-t-lg border-cookie-brown">
                <div className="flex flex-col w-full">

                    <div className="p-6"/>
                    <div className='flex flex-row mt-4 justify-center gap-14'>

                        <div className="flex flex-col w-2/6">
                            <label className='pl-1 text-lg text-cookie-hazel font-semibold'>Name</label>
                            <input type='password' className='px-4 py-3 mt-2 rounded-sm border-2 bg-cookie-dull/20 border-cookie-hazel hover:bg-cookie-white focus:border-cookie-brown/50 focus:bg-cookie-white focus:outline-none'
                            value={newSubnet.name} onChange={handleChange} name='name'/>
                        </div>
                        <div className="flex flex-col w-[15%]">
                            <label className='pl-1 text-lg text-cookie-hazel font-semibold'>Subnet</label>
                            <input type='password' className='px-4 py-3 mt-2  rounded-sm border-2 bg-cookie-dull/20 border-cookie-hazel hover:bg-cookie-white focus:border-cookie-brown/50 focus:bg-cookie-white focus:outline-none'
                            value={newSubnet.name} onChange={handleChange} name='name'/>
                        </div>
                        <div className="flex flex-col w-[7%]">
                            <label className='pl-1 text-lg text-cookie-hazel font-semibold'>VLAN</label>
                            <input type='password' className='px-4 py-3 mt-2  rounded-sm border-2 bg-cookie-dull/20 border-cookie-hazel hover:bg-cookie-white focus:border-cookie-brown/50 focus:bg-cookie-white focus:outline-none'
                            value={newSubnet.name} onChange={handleChange} name='name'/>
                        </div>
                        <div className="flex flex-col w-[12%]">
                            <label className='pl-1 text-lg text-cookie-hazel font-semibold'>Gateway</label>
                            <input type='password' className='px-4 py-3 mt-2  rounded-sm border-2 bg-cookie-dull/20 border-cookie-hazel hover:bg-cookie-white focus:border-cookie-brown/50 focus:bg-cookie-white focus:outline-none'
                            value={newSubnet.name} onChange={handleChange} name='name'/>
                        </div>
                        <div className="flex flex-col w-[7%]">
                            <label className='pl-1 text-lg text-cookie-hazel font-semibold'>Status?</label>
                            <input type='password' className='px-4 py-3 mt-2  rounded-sm border-2 bg-cookie-dull/20 border-cookie-hazel hover:bg-cookie-white focus:border-cookie-brown/50 focus:bg-cookie-white focus:outline-none'
                            value={newSubnet.name} onChange={handleChange} name='name'/>
                        </div>
                                        
                    </div>

                    <div className="p-6"/>
                    <div className='flex flex-row mt-4 gap-14 justify-center'>

                        <div className="flex flex-col w-[10%]">
                            <label className='pl-1 text-lg text-cookie-hazel font-semibold'>Fields</label>
                            <input type='password' className='px-4 py-3 mt-2 rounded-sm border-2 bg-cookie-dull/20 border-cookie-hazel hover:bg-cookie-white focus:border-cookie-brown/50 focus:bg-cookie-white focus:outline-none'
                            value={newSubnet.name} onChange={handleChange} name='name'/>
                        </div>
                        <div className="flex flex-col w-[10%]">
                            <label className='pl-1 text-lg text-cookie-hazel font-semibold'>VRF</label>
                            <input type='password' className='px-4 py-3 mt-2  rounded-sm border-2 bg-cookie-dull/20 border-cookie-hazel hover:bg-cookie-white focus:border-cookie-brown/50 focus:bg-cookie-white focus:outline-none'
                            value={newSubnet.name} onChange={handleChange} name='name'/>
                        </div>
                        <div className="flex flex-col w-1/6">
                            <label className='pl-1 text-lg text-cookie-hazel font-semibold'>Location</label>
                            <input type='password' className='px-4 py-3 mt-2  rounded-sm border-2 bg-cookie-dull/20 border-cookie-hazel hover:bg-cookie-white focus:border-cookie-brown/50 focus:bg-cookie-white focus:outline-none'
                            value={newSubnet.name} onChange={handleChange} name='name'/>
                        </div>
                        <div className="w-[41%]"/>
                                        
                    </div>
                    <div className="flex flex-row mt-4 justify-end">
                        <button type='button' className='text-white bg-cookie-brown font-normal rounded-md text-sm w-[10%] p-3 mt-5 text-cookie-white hover:bg-cookie-hazel'>Save Subnet</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default AddSubnet