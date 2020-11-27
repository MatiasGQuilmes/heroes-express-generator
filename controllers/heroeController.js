const { RSA_NO_PADDING } = require('constants');
const fs = require('fs')
heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports =  {
    heroes : (req, res)=>{
        res.render
    }
}
