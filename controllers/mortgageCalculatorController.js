exports.index = (req, res) =>{
    res.render('calculate', { title: 'Mortgage Calculator' });
};

exports.index = (req, res, next) => {
    let firstName = req.params.name;
    res.render('calculate', { title: 'Calculate', firstName: firstName });
};