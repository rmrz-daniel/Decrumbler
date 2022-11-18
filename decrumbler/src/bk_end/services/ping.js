const { spawn } = require('child_process');
// const validator = require('validator');

class Ping {
    constructor(host, times = 5) {
        this.host = host;
        this.times = times;
    }


    

    // validate() {
    //     if(!validator.isFQDN(this.host) && !validator.isIP(this.host)) {
    //         return false;
    //     }
    //     const times = this.times.toString();

    //     if(!validator.isInt(times)) {
    //         return false;
    //     }

    //     return true;
    // }

    send({ ondata = function () {}, onerror = function () {}, onclose = function () {} }) {
        // if(!this.validate()) {
        //     throw new Error('Invalid parameters.');
        // }
        const cmd = spawn('ping', ['-c', this.times, this.host]);

        cmd.stdout.on('data', data => {
            // @ts-ignore
            ondata(data.toString());
        });

        cmd.stderr.on('data', data => {
            // @ts-ignore
            onerror(data.toString());
        });

        cmd.on('close', code => {
            // @ts-ignore
            onclose(code);
        });
    }
}

module.exports = Ping;