show dbs 
use alekcart
show collections 

//Find object 
db.items.find({name:"ALek"})

//Deleting the first items from database 
db.items.deleteOne({name:"ALek"})
//Deleting multiple items from database
db.items.deleteMany({name:"Alek"})
