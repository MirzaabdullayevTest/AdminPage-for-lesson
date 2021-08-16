const mongoose = require('mongoose')
const uri = 'mongodb+srv://Mirzaabdullayev:y29GnNM1Fh8H7zyY@cluster0.oler2.mongodb.net/car'

module.exports = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        const db = mongoose.connection
        db.on('error', console.error.bind(console, 'connection error'))
        db.once('open', function () {
            console.log('MongoDB connected global');
        })
    } catch (err) {
        throw err
    }
}