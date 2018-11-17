const Hall = require('../models/hall.model');



//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


exports.create_hall = function(req, res, next){
    console.log("hallo1");
    let hall = new Hall(
        {
            id : req.body.id,
            name : req.body.name,
            city : req.body.city

        }
    );
    console.log("hallo2");

    hall.save(function(err, res){
    if(err){
            console.log(err);
        res.send({
            message: 'something went wrong'
        });
    }else {
        res.send({
            message: 'the appointment has been saved'
        });
    }
}
}
