let h = require('../helpers');

exports.index = (req, res, next) =>{
    res.render('calculate', { title: 'Mortgage Calculator' });
};

exports.process = (req, res, next) => { 
    let firstName = req.body.firstName;
    let interestRate = (req.body.mortgageInterest)*.01;
    const mortgageData = {
        mortgageAmount: h.numeral(req.body.mortgageAmount).format('$0,0.00'),
        mortgageInterest: h.numeral(interestRate).format('0%'),
        mortgageDownPaymentAmount: h.numeral(req.body.mortgageDownPaymentAmount).format('$0,0.00'),
        mortgageLoanLength: req.body.mortgageLoanLength,
        totalAmountOfDebt: h.numeral(req.body.totalAmountOfDebt).format('$0,0.00'),
        annualSalary: h.numeral(req.body.annualSalary).format('$0,0.00'),
    };

    res.render('calculate', { title: 'Calculate', firstName: firstName, mortgageData });
};

exports.debtTotals = (req, res) => {
    const name = req.body.firstName;
    console.log(`hello ${name}`);
    res.send('NOT IMPLEMENTED: Home Page');
};

