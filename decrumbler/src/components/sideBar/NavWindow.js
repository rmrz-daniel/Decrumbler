import logo from './logo.png'
import axios from "axios";
import React, {useState, useEffect} from "react";
function NavWindow() {

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

  return (
    <div className='flex flex-col w-full'>
        <div className='flex flex-row w-full h-[10%] items-center justify-center'>
            <div className='flex flex-col text-3xl font-black text-cookie-hazel'>
                <p>Cookie </p>
                <p>Decrumbler</p>
            </div>
            <img src={logo} className="w-1/4 ml-5"></img>
        </div>
        <div className='w-full bg-cookie-brown'>
            <h1 className='p-2 font-light text-cookie-white'>View Subnets</h1>
        </div>
        <div>
            {subnet.map(function(res) {
                return(<p>{res.name}</p>)
            })}
        </div>
    </div>
  )
}

export default NavWindow