exports.index = (req, res, next) =>{
    res.render('calculate', { title: 'Mortgage Calculator' });
};

exports.process = (req, res, next) => {
    let firstName = req.body.firstName;
    res.render('calculate', { title: 'Calculate', firstName: firstName });
};

exports.debtTotals = (req, res) => {
    const name = req.body.firstName;
    console.log(`hello ${name}`);
    res.send('NOT IMPLEMENTED: Home Page');
};

