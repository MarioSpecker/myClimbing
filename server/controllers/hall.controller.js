const Hall = require('../models/hall.model');



//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


exports.create_hall = function(req, res){
    console.log("hallo1");
    var hall = new Hall(
        {
            name : req.body.name,
            city : req.body.city

        }

    );
    hall.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   
    
    
};

