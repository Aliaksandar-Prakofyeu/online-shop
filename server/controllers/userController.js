const ApiError = require('../error/apiError')

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest('id is missing'))
        }
        res.json(id)
    }
}

module.exports = new UserController()