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
        type: Number,
        required: false,
    },
    dosisEntregadasPfizer: {
        type: Number,
        required: false,
    },
    dosisEntregadasAstraZeneca: {
        type: Number,
        required: false,
    },
    dosisEntregadasJanssen: {
        type: Number,
        required: false,
    },
    dosisPrimeraDosis: {
        type: Number,
        required: false,
    },
    dosisPautaCompleta: {
        type: Number,
        required: false,
    },
    porcentajeEntregadas: {
        type: Number,
        required: false,
    },
    porcentajePoblacionAdministradas: {
        type: Number,
        required: false,
    },
    porcentajePoblacionPrimeraDosis: {
        type: Number,
        required: false,
    },
    porcentajePoblacionCompletas: {
        type: Number,
        required: false,
    },
    fechaUltRegistro: {
        type: Number,
        required: false,
    },
    etarios: {
        type: Object,
        required: false,
    }
});

var Ccaa = mongoose.model('Ccaa', ccaaSchema, 'vacunas');

module.exports = Ccaa;