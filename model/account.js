

const mongoose = require('mongoose');

const AccountScheme = new mongoose.Schema({
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
export default mongoose.models.accounting || mongoose.model("accounting", AccountScheme);