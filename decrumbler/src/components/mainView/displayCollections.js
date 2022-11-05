import React, { useState, useEffect } from "react";
import HamBurger from './Lines.png'
import Map from './CanvasView.png'
import axios from "axios";

function DisplayCollections({ col }) {


    const [subnet, setSubnet] = useState([]);
    const [view, setView] = useState(true);

    useEffect(function () {
        axios.get('http://localhost:4444/api/cols')
            .then(
                function ({ data }) {
                    setSubnet(data);
                }
            ).catch(
                function (error) {
                    console.log(error)
                }
            )
    }, []
    )

    return (
        <>
            <div className="flex flex-row w-full bg-cookie-brown text-cookie-white h-10 items-center ">
                <p className="px-5">{col}</p>
            </div>
            <div className="flex mt-10 flex-col w-full h-full 2xl:w-11/12 border rounded-t-lg border-cookie-brown items-center">
                <div className="flex flex-row w-11/12 justify-start">
                    <div className="py-3 my-5 w-20 hidden md:block shrink-0">Sort By</div>
                    <select placeholder="Search and Filter" className='hidden md:block px-4 py-3 my-5 w-1/5 rounded-md bg-cookie-brown/20 focus:outline-none'>
                        <option disabled selected></option>
                        <option>Idk</option>
                        <option> whatever</option>
                    </select>
                    <div className='flex flex-row shrink-0 grow-0 p-1 m-5 w-24 rounded-md bg-cookie-brown/20' onClick={() => { setView(current => !current); console.log(view) }}>
                        <div className={'w-1/2 rounded-md p-1' + (view ? ' bg-cookie-hazel/80 ' : ' bg-transparent')}>
                            <img src={HamBurger} className='select-none' />
                        </div>
                        <div className={'w-1/2 rounded-md flex p-2' + (!view ? ' bg-cookie-hazel/80 ' : ' bg-transparent')}>
                            <img src={Map} className='select-none' />
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-end">
                        <button type='button' className='hidden md:block justify-self-end bg-cookie-brown/20 font-medium rounded-md w-32  px-4 py-3 m-5'>Import</button>
                        <button type='button' className='hidden md:block justify-self-end bg-cookie-brown/20 font-medium rounded-md w-32 px-4 py-3 my-5'>Export</button>
                    </div>
                </div>
                {subnet.map(function (res) {
                    if (res.name !== "user") {
                        return (
                            <>
                                <div className="pt-8" />
                                <div className="w-[92%] h-24 rounded-sm border border-cookie-brown shadow-lg">
                                    <p className="pl-5 pt-3 font-medium text-cookie-hazel text-xl">{res.name}</p>
                                </div>
                            </>

                        )
                    }

                })}

            </div>
        </>
    )
}

export default DisplayCollections