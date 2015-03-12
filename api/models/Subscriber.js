//Creates a new subscription

module.exports = {
    attributes: {
        name: {
            type: 'name',
            require: true
        },

        email: {
            type: 'email',
            required: false
        },

        phone: {
            type: 'string',
            required: true
        }
    },

    subscribe: function (inputs, cb){

        Subscriber.create({

            name: inputs.name,
            email: inputs.email,
            phone: inputs.phone

        }).exec(cb);
    }
}