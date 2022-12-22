const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema( {
    name: String,
    headQuarter: String
    
    },


{ timestamps: true });


module.exports = mongoose.model('LibraryPublisher', bookSchema)
