// Saving Subscribers phone number and email

module.exports = {

    subscribe: function (req, res){

        Subscriber.subscribe({
            name: req.param('name'),
            email: req.param('email'),
            phone: req.param('phone'),

        }, function (err, subscriber) {
            if (err){
                return res.serverError();
            }

            if (req.wantsJSON){
                return res.ok('You subscribed successfully!');
            }

            //We need to create a success route
            return res.redirect('/');
        });
    }

}