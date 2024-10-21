const mongoose = require('mongoose');
const dbURI = "mongodb+srv://dannyfinnegan:Buster241@cluster0.3atlb.mongodb.net/movies?retryWrites=true&w=majority&appName=Cluster0";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log(" Mongoose is connected")},
	err=> {console.log(err)}
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./locations');

//const dbConnection = mongoose.connection;


//dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
//dbConnection.once("open", () => console.log("Connected to DB!"));
//mongoose.connect(dbURI);

require('./locations');

