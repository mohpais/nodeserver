const security = require('../helpers/security');
const global = require('../global/index');

module.exports = {
    logIn: async(req, res) => {
        const { params } = req.body;
        const result = JSON.parse(security.decrypt(params));
        const hash = await security.hashingPassword(result.password)
        console.log(hash);
        // res.status(200).json({
        //     global: result,
        //     bcp: hash
        // })
    }
}
