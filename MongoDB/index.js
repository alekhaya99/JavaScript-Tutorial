const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/alekcart', {useNewUrlParser: true,useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Congo you are connected")
});

const kittySchema = new mongoose.Schema({
  name: String
});


// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting =  "Meow name is " + this.name;
  
  console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);

var alek=new Kitten({name:'alek'});
// console.log(alek.name)
// alek.speak();
alek.save(function (err, alek) {
  if (err) return console.error(err);
  alek.speak();
});

Kitten.find({name:"alek"},function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})