import React, {useState} from "react";
// import "./x.css";
import PingIpForm from "./pingIpForm";

const PingIp = (props) => {

    const pingNewIp = async (submittedIp) => {
        const ip = submittedIp;

        var ping = require('ping');

        var host = ip;
    
        let res = await ping.promise.probe(host);
        console.log(res);    

        props.onPingIp(ping);
    };   

    return (
        <div>
            <PingIpForm onSubmitIp={pingNewIp} />
        </div>
    );
}

export default PingIp;