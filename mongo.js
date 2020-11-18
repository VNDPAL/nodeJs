var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mongo:mongo@cluster0.lmmmb.mongodb.net/myDB?retryWrites=true&w=majority";

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("myDB");
//     dbo.createCollection("customers", function (err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//     });
//     db.close();
// });

// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     var dbo = db.db('myDB');
//     var myobj = [
//         { _id: 1, name: "Rohit", address: "MI-India" },
//         { _id: 2, name: "DeCock", address: "MI_SA" },
//         { _id: 3, name: "Surya", address: "MI" },
//         { _id: 4, name: "Ishan", address: "MI" },
//         { _id: 5, name: "Hardik", address: "MI" },
//         { _id: 6, name: "Pollard", address: "MI" },
//         { _id: 7, name: "Krunal", address: "MI" },
//         { _id: 8, name: "Chahar", address: "MI" },
//         { _id: 9, name: "Pattison", address: "MI" },
//         { _id: 10, name: "Bolt", address: "MI" },
//         { _id: 11, name: "Bumrah", address: "MI" }
//     ];
//     dbo.collection("customers").insertMany(myobj, (err, res) => {
//         if (err) throw err;
//         console.log(res);
//         db.close();
//     })
// })

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("myDB");
    var query = { name: "Jaspris" };
    var values = { name: "rohit", age: "30" };
    dbo.collection("cutomer").find().limit(2).toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});