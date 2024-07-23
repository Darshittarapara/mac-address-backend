const WiFiControl = require('wifi-control');
const config = {
    debug: true || false,
    iface: 'wlan0',
    connectionTimeout: 10000
}

const handlerError = (err, res) => {
    return res.status(400).json({
        message: err,
        status: false,
        mac: null
    })
}
const getMacAddress = async (res) => {
    let data = {}
    await WiFiControl.init(config);
    await WiFiControl.configure(config);
    WiFiControl.scanForWiFi(function (err, response) {
        if (err) handlerError(err, res)
        return res.status(200).json({
            message: response?.msg,
            status: false,
            mac: response?.networks?.[0]?.mac
        })
    })
    console.log('response', data)
}

module.exports = getMacAddress