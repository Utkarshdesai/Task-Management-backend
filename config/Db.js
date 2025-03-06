const mongoose = require('mongoose')
require("dotenv").config();

const dbconnect = () => {
    
         mongoose.connect(process.env.DBURL , {
                })
        .then( () =>  console.log('db connected'))
        .catch( () => {
            console.log('db connection failed')
            console.error(error);
            process.exit(1)
        })


    
   
}

module.exports = dbconnect