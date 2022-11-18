const express = require('express');
const util = require('node:util');
const exec = util.promisify(require('child_process').exec);
// const { db } = require('../models/user');
export const rout = express.Router();
// const mongoose = require("mongoose");
// const { spawn } = require('child_process');
// const { default: validator } = require('validator');

// const validator = require('validator');

// rout.get('/test/:collectionName/:Subnet',
//     function (req, res, next) {
//         let subnetColl = require('../models/test')(req.params.collectionName);;
        
//         // @ts-ignore
//         subnetColl.find({Subnet: req.params.Subnet}).then(
//             async function ping(host) {
//                 if (host != null && typeof host === 'string') {
//                     const {stdout, stderr} = await exec(`ping ${host}`);
//                     let output = stdout + " " + stderr;
//                     // @ts-ignore
//                     res.send(output);
//                 } else {
//                     // @ts-ignore
//                     res.send('Sorry, the input is incorrect. Please try again')
//                 }
//             }
//         ).catch(next);
//     }  
// );

// module.exports = rout;

let ip = "";

rout.get(ip, 
    function(request, response){
        ip = request.ip;
        async function ping(host) {
            if (host != null && typeof host === 'string') {
                const {stdout, stderr} = await exec(`ping ${host}`);
                let output = stdout + " " + stderr;
                // @ts-ignore
                response.send(output);
            } else {
                // @ts-ignore
                response.send('Sorry, the input is incorrect. Please try again')
            }
        }
            ping(ip);
    }
)

// export function get(ip) {
//     throw new Error("Function not implemented.");
// }
