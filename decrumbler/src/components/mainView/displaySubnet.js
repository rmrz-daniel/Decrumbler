import React, {useEffect, useState} from "react";

const DisplaySubnet = (props) => {
    const [subnets, setSubnet] = useState([]);

    //Fetch data from database
    useEffect(() => {
        async function getSubnets() {
            const response = await fetch("http://localhost:3000/testapi"); //find port server is hosted on

            if(!response.ok) {
                const errMessage = "Sorry, something went wrong";
                window.alert(errMessage);
                return;
            }

            const subnets = await response.json();
            setSubnet(subnets);
        }

        getSubnets();

        return;
    }, [subnets.length]);

    //Display results of fetch
    return (
        <li className="list">
            <div id="subnet">
                <div>
                    {props.testapi.Name}
                </div>
                <div>
                    {props.testapi.Subnet}
                </div>
                <div>
                    {props.testapi.VLAN}
                </div>
                <div>
                    {props.testapi.state}
                </div>
                <div>
                    {props.testapi.GW}
                </div>
                <div>
                    {props.testapi.Location}
                </div>
            </div>
        </li>
    );
}

export default DisplaySubnet;