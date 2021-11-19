
const authMiddle = (req, res, next) =>{
    console.log('url:',req.url)
    next();
}
module.exports = { authMiddle }