module.exports = function(inputs) {

    var inputs = inputs || {},
        req = this.req,
        res = this.res;


    Subscriber.subscribe({

        name: inputs.name,
        email: inputs.email,
        phone: inputs.phone

    }, function(err, subscriber){

        if(err){
            return res.serverError();
        }

        if (subscriber.error){

            if (req.wantsJSON || !inputs.invalidRedirect){
                return res.badRequest('Please make sure you enter the correct information');
            }

            return res.redirect(inputs.invalidRedirect);
        }

        if (req.wantsJSON || !inputs.successRedirect){
            return res.ok();
        }

        return res.redirect(inputs.successRedirect);
    });
}