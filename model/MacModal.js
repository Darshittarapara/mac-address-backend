const address = require("address");
class MacAddress {
  getIPAddress() {
    const response = address.getInterfaceAddress('', 'Wi-Fi');
    console.log('response', response)
    return {
      ip: response.address,
      mac:response.mac,
    };
  }
}

module.exports = MacAddress;
