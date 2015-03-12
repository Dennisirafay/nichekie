//Creates a new subscription

module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true
        },

        email: {
            type: 'string',
            required: false
        },

        phone: {
            type: 'string',
            required: true
        }
    },

    subscribe: function (inputs, cb){
        
        Subscriber.create(inputs).exec(cb);
    }
}