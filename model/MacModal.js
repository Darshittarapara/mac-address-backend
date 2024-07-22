const macaddress = require('macaddress');
class MacAddress {
    async getMacAddress() {
        const response = await macaddress.all();
        return response
    }
}

module.exports = MacAddress