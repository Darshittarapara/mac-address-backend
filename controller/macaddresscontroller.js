const MacAddress = require('../model/MacModal');

exports.getMacAddress = async (req, res) => {
    const data = await new MacAddress().getMacAddress()
    console.log('data', data)
    Object.entries(data).forEach(([key, value]) => {
        if (data[key].mac) {
            res.status(200).json({
                mac: value?.mac,
                status: true,
                ip: value?.ipv4,
                message: "Data fetch succssfully"
            })

            return
        }
        res.status(500).json({
            status: false,
            message: "Something went wrong"
        })
    })

}