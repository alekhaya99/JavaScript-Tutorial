// Inserting data in mongo db
use alekcart
db.alekcart
db.items.insertOne({
    name:"ALek",roll:32,id:4125,class:5
})
db.items.insertMany([{
    name:"ALek",roll:32,id:4125,class:5
},{name:"ALek2",roll:33,id:4126,class:5
}])

//Find object 
db.items.find({})