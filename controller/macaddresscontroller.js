const MacAddress = require('../model/MacModal');

exports.getMacAddress = async (req, res) => {
    const macAddress = new MacAddress()
     macAddress.getIPAddress(res)
    // console.log('data', mac)
    // if (mac) {
    //     res.status(200).json({
    //         mac: mac,
    //         status: true,
    //         ip,
    //         message: "Data fetch succssfully"
    //     })

    //     return
    // }
    // res.status(500).json({
    //     status: false,
    //     message: "Something went wrong"
    // })
}