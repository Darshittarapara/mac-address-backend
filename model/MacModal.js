const {address} = require("address");
const findMacAddress = require('../utils/wifiControl')
class MacAddress {
  async getIPAddress(res) {
    // const response = address.getInterfaceAddress();
    // console.log('response', response)
   return await findMacAddress(res)
    // let ip =''
    // let mac = ''
    //   address('Wi-Fi', (err, data) => {
    //     if(!err) {
    //         ip = data.ip;
    //         mac = data.mac
    //     }
    //   })
    // return {
    //   ip,
    //   mac
    // };
  }
}

module.exports = MacAddress;
