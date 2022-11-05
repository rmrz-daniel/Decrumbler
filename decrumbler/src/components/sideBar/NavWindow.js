import logo from './logo.png'
import axios from "axios";
import React, {useState, useEffect} from "react";
function NavWindow({setCol}) {

    const [subnet, setSubnet] = useState([]);

    useEffect( function(){
        axios.get('http://localhost:4444/api/cols')
            .then(
                function({data}){
                    setSubnet(data);
                }
            ).catch(
                function(error){
                    console.log(error)
                }
            )
        },[]
    )

    function selectCol(name){
        // console.log(name)
        setCol(name);
    }

  return (
    <div className='flex flex-col w-full hidden 2xl:block'>
        <div className='flex flex-row w-full h-[10%] items-center justify-center'>
            <div className='flex flex-col text-2xl font-black text-cookie-hazel 2xl:text-3xl'>
                <p>Cookie </p>
                <p>Decrumbler</p>
            </div>
            <img src={logo} className="w-1/4 ml-5 hidden 2xl:block"></img>
        </div>
        <div className='w-full bg-cookie-brown hover:bg-cookie-hazel'>
            <h1 className='p-2 font-light text-cookie-white' onClick={() => selectCol(undefined)}>View Fields</h1>
        </div>
        <div>
            {subnet.map(function(res) {
                if(res.name !== "user"){
                    return(<div key={res.name} className='pl-5 w-full hover:bg-red-500' onClick={() => selectCol(res.name)}>{res.name}</div>)
                }
                
            })}
        </div>
    </div>
  )
}

export default NavWindow