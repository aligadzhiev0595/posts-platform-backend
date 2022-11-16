const {Schema,model} = require('mongoose')


const schema = new Schema({
	title: {type: String, required:true},
	desc: {type: String, required:true},
	image: {type: String, required:true},
})

module.exports = model('Post', schema)