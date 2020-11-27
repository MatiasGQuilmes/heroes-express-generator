module.exports = {
    index : (req, res)=>{
       res.render('index', {title : 'Digital Heroes'})
    },
    creditos : (req, res)=>{
        res.render('creditos',{title : 'Créditos :'})
    }
}