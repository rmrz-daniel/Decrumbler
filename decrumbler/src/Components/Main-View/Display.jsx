import React, {useState, useEffect} from "react";
import NavWindow from "../Side-View/NavWindow";
import DisplaySubnet from "./DisplaySubnet";
import DisplayColl from "./DisplayColl";
import AddSubnet from "./AddSubnet";

function Display() {

    const [col, setCol] = useState();
    const [add, setActiveAdd] = useState(false);

    return (
        <div className='bg-cookie-white'>
            <div className='flex flex-row h-screen '>
                <div className='flex w-15 sm:w-16 2xl:w-1/6'>
                    <NavWindow setCol = {setCol} setActiveAdd = {setActiveAdd}/>
                </div>
                <div className="w-[1px] h-screen bg-cookie-brown"></div>
                <div className='flex flex-col items-center h-screen  w-full '>
                    {
                    add !== true 
                    ?
                        col !== undefined
                        ? <DisplaySubnet col={col}/>
                        : <DisplayColl col={col} setCol = {setCol}/>
                    :
                        <AddSubnet/>
                    }

                    
                </div>
            </div>
        </div>
    );

}

export default Display;