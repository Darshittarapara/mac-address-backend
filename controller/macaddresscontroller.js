const MacAddress = require('../model/MacModal');

exports.getMacAddress = async (req, res) => {
    const data = await new MacAddress().getMacAddress()

    if (data['Wi-Fi']) {
        res.status(200).json({
            mac: data['Wi-Fi']?.mac,
            status: true,
            ip: data['Wi-Fi']?.ipv4,
            message: "Data fetch succssfully"
        })

        return
    }
    res.status(500).json({
        status: false,
        message: "Something went wrong"
    })
}