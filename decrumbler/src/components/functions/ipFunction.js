import React, {useState} from "react";
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

        const data = {
            cmd: 'ping',
            param: getIp
        };

        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify(data));
        }

        socket.addEventListener('message', e => {
            let line = document.createElement('div');
            line.innerText = e.data.toString();
            document.body.appendChild(line);
        });

        setNewIp("");
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