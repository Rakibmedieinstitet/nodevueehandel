module.exports = {
    register(req, res){
    res.send({
        namn: `${req.body.email} was registered`
    })
    
    }
}