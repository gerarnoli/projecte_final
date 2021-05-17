var mongoose = require('mongoose');

var ccaaSchema = new mongoose.Schema({
    ccaa: {
        type: String,
        required: false
    },
    dosisAdministradas: {
        type: Number,
        required: false
    },
    dosisEntregadas: {
        type: Number,
        required: false,
    },
    dosisEntregadasModerna: {
        
    }


});