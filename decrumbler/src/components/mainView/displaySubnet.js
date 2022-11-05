import axios from "axios";
import React, {useState, useEffect} from "react";
import NavWindow from "../sideBar/NavWindow";
import Display from "./display";
import DisplayCollections from "./displayCollections";

function DisplaySubnet() {

    const [col, setCol] = useState();

    return (
        <div className='bg-cookie-white'>
            <div className='flex flex-row h-screen '>
                <div className='flex w-15 sm:w-16 2xl:w-1/6'>
                    <NavWindow setCol={setCol}/>
                </div>
                <div className="w-[1px] h-screen bg-cookie-brown"></div>
                <div className='flex flex-col items-center h-screen  w-full '>
                    {
                        col !==undefined
                        ? <Display col={col}/>
                        : <DisplayCollections col={col}/>
                    }
                    
                </div>
            </div>
        </div>
    );

}

export default DisplaySubnet;