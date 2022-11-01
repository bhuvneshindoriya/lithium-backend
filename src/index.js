const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment=require('moment')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://bhanu:Bhanu08@cluster0.gu0q6pj.mongodb.net/middleware-0", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
 // );


 app.use (function(req,res,next){
    const yearDate = moment().format('YYYY MMMM Do ,h:mm:ss a')
    const ipAddress = req.socket.remoteAddress
    const route = req.path
    console.log({yearDate,ipAddress,route})
    next()
}
 )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
