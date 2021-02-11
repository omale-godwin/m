const mongoose = require('mongoose');

const MassSchema =new mongoose.Schema({
        title: {
            type: String
        },
        content:{
            type: String
        },
        id: Number
})

export default mongoose.models.masscoms || mongoose.model("masscoms", MassSchema);