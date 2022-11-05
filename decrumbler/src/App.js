// import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import ListSubnet from './components/ListSubnet';
import Login from "./components/loginPage/login";
// import Login from './components/Login';
import DisplaySubnet from "./components/mainView/displaySubnet";


function App(props) {

//     const [ viewAllSubnet, setViewAllSubnet ] = useState([]); 

//     const [newSubnet, setSubnet] = useState({
//         Name: '',
//         Subnet: '',
//         VLAN: '',
//         state: '',
//         GW: '',
//         VRF: '',
//         Location: ''
//     });

//     const URL = "http://localhost:4444/api/test/:collectionName";

//     useEffect( function(){
//         axios
//             .get(URL)
//             .then(
//                 function({data}){
//                     setViewAllSubnet(data);
//             }
//             ).catch(
//                 function(error){
//                     console.log("");
//             }
//         )
//     }, []
// );

//     function handleChange(e) {
//         const { value } = e.target;
//         setSubnet({
//             ...newSubnet,
//             [e.target.name]: value
//         });
//     }

//     const table = function(){ 
//         return viewAllSubnet.map(function(res, i) {
//             return ( <tr key={i}>
//                 <td>{res.Name}</td>
//                 <td>{res.Subnet}</td>
//                 <td>{res.VLAN}</td>
//                 <td>{res.state}</td>
//                 <td>{res.GW}</td>
//                 <td>{res.VRF}</td>
//                 <td>{res.Location}</td>
//               </tr> )
//         })
//     }

//     const addNew = async (e) => {
//         //prevent page refresh
//         e.preventDefault();
//         console.log(newSubnet);
//         try {
//             const { data: res } = await axios.post(URL, newSubnet);

//         } catch (err) {
//             if (
//                 err.response &&
//                 err.response.status >= 400 &&
//                 err.response.status <= 500
//             ) {
//                 console.log(err.response.data.message);
//             }
//         }

//     }

    return (
        <>
            <DisplaySubnet/>
            {/* <Login/> */}
        </>
        // <div className="App">
        //     <p>Test</p>
        //     <form onSubmit={addNew}>

        //         <label htmlFor="Name" >Name</label>
        //         <input name="Name" type="text" placeholder="Name" value={newSubnet.Name} onChange={handleChange} />

        //         <label htmlFor="Subnet" >Subnet</label>
        //         <input name="Subnet" type="text" placeholder="127.0.0.1" value={newSubnet.Subnet} onChange={handleChange} />

        //         <label htmlFor="VLAN" >VLAN</label>
        //         <input name="VLAN" type="text" placeholder="VLAN" value={newSubnet.VLAN} onChange={handleChange} />

        //         <label htmlFor="state" >state</label>
        //         <input name="state" type="text" placeholder="state" value={newSubnet.state} onChange={handleChange} />

        //         <label htmlFor="GW" >GW</label>
        //         <input name="GW" type="text" placeholder="GW" value={newSubnet.GW} onChange={handleChange} />

        //         <label htmlFor="VRF" >VRF</label>
        //         <input name="VRF" type="text" placeholder="VRF" value={newSubnet.VRF} onChange={handleChange} />

        //         <label htmlFor="Location" >Location</label>
        //         <input name="Location" type="text" placeholder="Location" value={newSubnet.Location} onChange={handleChange} />

        //         <button variant="primary" type="submit" >
        //             Add New
        //         </button>
        //     </form>
        //         <table className='table table-success table-striped table-hover table-boredered' >
        //             <thead>
        //                 <tr>
        //                     <th scope='col'>Name</th>
        //                     <th scope='col'>Subnet</th>
        //                     <th scope='col'>VLAN</th>
        //                     <th scope='col'>state</th>
        //                     <th scope='col'>GW</th>
        //                     <th scope='col'>VRF</th>
        //                     <th scope='col'>Location</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {
        //                   table()  
        //                 }
        //             </tbody>
        //         </table>
        // </div>
    );
}

export default App;
