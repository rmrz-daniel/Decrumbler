const util = require('node:util');
const exec = util.promisify(require('child_process').exec);

const ping = async(host) => {
  const {stdout, stderr} = await exec(`ping ${host}`);
  console.log(stdout);
  console.log(stderr);
}

module.exports = {ping};