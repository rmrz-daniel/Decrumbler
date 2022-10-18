import React, {useState} from "react";
// import "./x.css";

const PingIpForm = (props) => {
    const[newIp, setNewIp] = useState("");

    const ipHandler = (e) => {
        setNewIp(e.target.value);
    };

    const submitHandler = (e) => {
        //to prevent page reload on submit
        e.preventDefault();

        const ip = newIp;

        //passing ip to pingIp.js
        props.onSubmitIp(ip);

        //clear input
        setNewIp("");
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>IP</label>
                <input type="text" value={newIp} onChange={ipHandler}/>
            </div>
            <div className="newOrder-actions">
                <button type="submit">Ping</button>
            </div>
        </form>
    );
}

export default PingIpForm;