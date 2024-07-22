const os = require("os");
class MacAddress {
  getIPAddress() {
    const nets = os.networkInterfaces();
    console.log('nets', nets)
    const address = nets?.["Wi-Fi"]?.[1]?.address;
    const mac = nets?.["Wi-Fi"]?.[1]?.mac;
    return {
      ip: address,
      mac,
    };
  }
}

module.exports = MacAddress;
