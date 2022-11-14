const express = require('express')
const bodyparser =require('body-parser')
const route = require('./router/route')
const { default: mongoose } = require('mongoose');
const app = express()

app.use(bodyparser.json()) 

mongoose.connect("mongodb+srv://sheetalpandey12:shanu1234pandey@newproject.tsmixoq.mongodb.net/group2Database", {
    useNewUrlParser: true 
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/',route)
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});