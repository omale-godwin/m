

const mongoose = require('mongoose');

const ComputertScheme = new mongoose.Schema({
    title : {
        type: String
    },
    content : {
        type: String
    },
    id : {
        type: Number
    }
})
export default mongoose.models.computer || mongoose.model("computer", ComputertScheme);