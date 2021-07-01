const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const items = require('./routes/api/items')
const app = express();

//bodyParser Middlepare
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Db config
const db = require('./config/keys').mongoURI;


/*/
//connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Mongodb is connected"))
    .catch(err => console.log(err+"error ouccessssssssssssds"));
/*/
mongoose.connect("mongodb://localhost/mongotube", {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		})
        .then(() => console.log("Mongodb is connected"))
        .catch(err => console.log(err+"error Mongodb connections"));
app.use("/api/items",require("./routes/api/items"))

/// Serve satic  asset if in production
if(process.env.NOD_ENV === 'production'){
    //set Satitc folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname,'client', 'bulid', 'index.html'));
    });
}


    const port = process.env.PORT || 5000;
  
app.listen(port, () => console.log('Server started on port is '+port));    