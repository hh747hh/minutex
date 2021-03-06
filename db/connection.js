var mongoose = require("mongoose");

var ObjectId = mongoose.Schema.Types.ObjectId;
var ExerciseSchema = new mongoose.Schema(

 {
   name: String,
  imageUrl: String,
  benefits: String
}

);

mongoose.model("Exercise", ExerciseSchema);

if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGOLAB_URI);
}else{
  mongoose.connect("mongodb://localhost/minutex");
}

module.exports = mongoose;
