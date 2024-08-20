const Sequelize = require('sequelize');
const db = require('../db/conect');

const Job = db.define('job',{
    title:{
        type: Sequelize.STRING,
    },
    description:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
    },
    new_job:{
        type: Sequelize.STRING,
    },
    salary:{
        type: Sequelize.STRING,
    },
    company:{
        type: Sequelize.STRING,
    },
});
module.exports = Job;