const fs = require('fs')
heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports =  {
    heroe : (req, res)=>{
        res.render('heroes', {title:heroes})
    }
}
