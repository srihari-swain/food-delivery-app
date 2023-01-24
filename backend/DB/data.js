let MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/', function(err, client){
  if(err) throw err;
  let db = client.db('food_delivery_app');
  db.collection('food_items').find().toArray(function(err, item){
    if(err) throw err;
    global.item=item
    
    client.close();
    });
    db.collection('food_category').find().toArray(function(err, category){
      if(err) throw err;
      global.category=category;
      
      client.close();
      });
 });