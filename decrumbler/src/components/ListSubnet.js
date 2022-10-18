import axios from "axios";
import React, { useState, useEffect } from "react"

function ListSubnet(props) {

    var [ subRes, setSubRes ] = useState({
        Name: props.item.Name,
        Subnet: props.item.Subnet,
        VLAN: props.item.VLAN,
        state: props.item.state,
        GW: props.item.GW,
        VRF: props.item.VRF,
        Location: props.item.Location

    })
    const URL = "http://localhost:4444/api/test/:collectionName";

    useEffect(
        function() {
        axios.get(URL) // format
            .then(function({data}) {
                setSubRes(data);
            }).catch(function(err) {
                console.log("error: ", err);
            })
        },[subRes]
    );

    return (
      <tr>
        <td>{subRes.Name}</td>
        <td>{subRes.Subnet}</td>
        <td>{subRes.VLAN}</td>
        <td>{subRes.state}</td>
        <td>{subRes.GW}</td>
        <td>{subRes.VRF}</td>
        <td>{subRes.Location}</td>
      </tr>
    );
  };

export default ListSubnet;