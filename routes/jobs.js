const express = require('express'); //rota
const router = express.Router(); //objeto de rota
const Job = require('../models/Job'); // models

//testRoute
router.get('/test',(req, res) =>{
    res.send('OkRota');
})

//detalhes++
router.get("/view/:id", (req, res) =>
    Job.findOne({
        where: { id: req.params.id },
    })
        .then((job) => {
            res.render("view", {
                job,
            });
        })
        .catch((err) => console.log(err))
);

router.get('/add',(req, res) =>{
    res.render('add');
})

//add POST
router.post('/add', (req, res) => {
    let {title, salary, company, description, email, new_job} = req.body;


//insert
Job.create({
    title,
    salary,
    company,
    description,
    email,
    new_job

})
.then(() => res.redirect('/'))
.catch(err => console.log(err));

});
module.exports = router