import React from "react";
import ViewSubnetsBtn from "../buttons/viewSubnetsBtn";
import IpScanBtn from '../buttons/ipScanBtn';
import AddSubnetBtn from '../buttons/addSubnetBtn';
import "./welcomePage.css"

const WelcomePage = () => {
    return (
        <div className='buttons'>
            <ViewSubnetsBtn />
            <AddSubnetBtn />
            <IpScanBtn />
        </div>

    );
}

export default WelcomePage;