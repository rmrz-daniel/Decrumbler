import React, {useEffect, useState} from "react";

const DisplaySubnet = (props) => {
    const [subnets, setSubnet] = useState([]);

    //Fetch data from database
    useEffect(() => {
        async function getSubnets() {
            const response = await fetch("http://localhost:5000/testapi"); //find port server is hosted on

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
        <li>
            <div id="subnet">
                <div>
                    {props.testapi.name}
                </div>
                <div>
                    {props.testapi.subnet}
                </div>
                <div>
                    {props.testapi.vlan}
                </div>
                <div>
                    {props.testapi.state}
                </div>
                <div>
                    {props.testapi.gateway}
                </div>
                <div>
                    {props.testapi.location}
                </div>
            </div>
        </li>
    );
}

export default DisplaySubnet;