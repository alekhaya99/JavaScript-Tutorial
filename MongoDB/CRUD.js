//Updating one item in a database
db.items.updateOne({name:"ALek"},{$set:{roll:33}})
//Updating multiple item in a database
db.items.updateMany({name:"ALek"},{$set:{roll:33,id:5000}})