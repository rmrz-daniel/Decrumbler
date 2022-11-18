import React, {useState} from "react";
import {rout} from "../../bk_end/api/pingapi";
// import IpScanBtn from "../buttons/ipScanBtn";
// import "./ipScanBtn.css";

const IpFunction = () => {
    const [newIp, setNewIp] = useState("");
    // const [state, setState] = useState("display")

    //to get ip value
    const getIp = (event) => {
        setNewIp(event.target.value);        
    }

    // const wsSocket = new WebSocketServer({port:3000});

      const pingHandler = (event) => {
        //to prevent page reload on submit event
        event.preventDefault();
        const ip = newIp;
        rout.get(ip);

        console.log(rout.get(ip))
        // setNewIp("");
    }    

    return(
        <div className="scan">
            {/* {state === "display" && (
                <IpScanBtn functionLoader = {() => setState("displayPingForm")} />
            )} */}

            <form onSubmit={pingHandler}>
                <input type="text" value={newIp} onChange={getIp}></input>
                <button type="submit">Scan</button>
            </form>
        </div>
    );
}

export default IpFunction;