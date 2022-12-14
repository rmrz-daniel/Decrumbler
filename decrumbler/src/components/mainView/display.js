import axios from "axios";
import React, { useState, useEffect } from "react";

function Display({ col }) {

    const [subnet, setSubnet] = useState([]);

    useEffect(function () {
        axios.get(`http://localhost:4444/api/test/${col}`)
            .then(
                function ({ data }) {
                    console.log(col)
                    setSubnet(data);
                    console.log(data)
                }
            ).catch(
                function (error) {
                    console.log(error)
                }
            )
    }, [col], []
    )

    return (
        <>
            <div className="flex flex-row w-full bg-cookie-brown text-cookie-white h-10 items-center ">
                <p className="px-5">{col}</p>
            </div>
            <div className="flex flex-row w-11/12 justify-start">
                <div className="px-4 py-3 my-5 w-20 rounded-l-md bg-cookie-brown/20">Icon</div>
                <input type='text' placeholder="Search and Filter" className='pr-4 py-3 my-5 w-2/5 rounded-r-md  bg-cookie-brown/20 focus:outline-none' />
                <div className="flex flex-row w-full justify-end">
                    <button type='button' className='justify-self-end bg-cookie-brown/20 font-medium rounded-md w-32  px-4 py-3 m-5'>Import</button>
                    <button type='button' className='justify-self-end bg-cookie-brown/20 font-medium rounded-md w-32 px-4 py-3 my-5'>Export</button>
                </div>

            </div>
            <div className="flex flex-col w-full h-full 2xl:w-11/12 border rounded-t-lg border-cookie-brown items-center">
                <table className="table-fixed w-full content-center">
                    <thead className="bg-cookie-hazel/70 h-10 items-center justify-start text-cookie-brown">
                        <tr>
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
                    <tbody className="mx-auto">
                        {subnet.map(
                            function (res) {
                                return (
                                    <tr key={res._id}>
                                        <td >{res.Name}</td>
                                        <td>{res.Subnet}</td>
                                        <td>{res.VLAN}</td>
                                        <td>{res.VRF}</td>
                                        <td>{res.GW}</td>
                                        <td>{res.Location}</td>
                                        <td>{res.state}</td>
                                        <td>N/A</td>
                                        <td><button type='button' className='justify-self-end bg-cookie-brown/20 font-medium rounded-md w-15 px-3 py-2 '>ping</button></td>
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

export default Display