const uuid = require('uuid')
const path = require('path')
const {Device} = require('../models/models')

class DeviceController {
    async create(req, res) {
        const {name, price, brandId, typeId, info} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + '.jpg'
        await img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const device = await Device.create({name, price, brandId, typeId, img: fileName})

        return res.json(device)
    }

    async getOne(req, res) {

    }

    async getAll(req, res) {

    }

}

module.exports = new DeviceController()