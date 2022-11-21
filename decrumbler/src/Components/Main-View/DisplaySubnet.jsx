import React, { useState, useEffect } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";

function DisplaySubnet({col}) {

    const [subnet, setSubnet] = useState([]);

    useEffect(() =>{
        db.subnet
        .where('collection')
        .equals(col)
        .toArray(function(data){
            setSubnet(data)
        })
    },[col],[])

    // console.log(subnet)
    function ping(){
        fetch('http://localhost:8080/priv-ping-api/2.8.2.8')
            .then(response => response.json())
            .then((data) => {
                console.log(data)
            })
    }

    return (
        <>
            <div className="flex flex-row w-full bg-cookie-brown text-cookie-white h-10 items-center">
                <p className="px-5 select-none">{col}</p>
            </div>
            <div className="flex flex-row w-11/12 justify-start">
                <div className="px-4 py-3 my-5 w-20 rounded-l-md bg-cookie-brown/20 flex items-center">
                    <svg className="w-6" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fill-rule="nonzero"/></svg>
                </div>
                <input type='text' placeholder="Search and Filter" className='pr-4 py-3 my-5 w-2/5 rounded-r-md  bg-cookie-brown/20 focus:outline-none' />
                <div className="flex flex-row w-full justify-end">
                    
                    {/* <button type='button' className='justify-self-end bg-cookie-brown/20 font-medium rounded-md w-32  px-4 py-3 m-5'>Import</button> */}
                    <button type='button' className='justify-self-end bg-cookie-brown/20 font-medium rounded-md w-32 px-4 py-3 my-5'>Export</button>
                </div>

            </div>
            <div className="flex flex-col w-full h-full 2xl:w-11/12 border rounded-t-lg border-cookie-brown items-center">
                <table className="w-full text-center">
                    <thead className="h-10 text-cookie-brown bg-cookie-hazel/70 select-none">
                        <tr className="z-10">
                            <th>Name</th>
                            <th>Subnet</th>
                            <th>VLAN</th>
                            <th>VRF</th>
                            <th>GW</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Last Pinged</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {subnet?.map(
                            function (subnet) {
                                return (
                                    <tr key={subnet.id}>
                                        <td>{subnet.name}</td>
                                        <td>{subnet.subnet}</td>
                                        <td>{subnet.vlan}</td>
                                        <td>{subnet.vrf}</td>
                                        <td>{subnet.gw}</td>
                                        <td>{subnet.location}</td>
                                        <td>{subnet.state}</td>
                                        <td>N/A</td>
                                        <td><button type='button' className='bg-cookie-brown/20 font-medium rounded-md w-15 px-3 py-2' onClick={ping}>ping</button></td>
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DisplaySubnet