const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const PublisherModel= require("../models/PublisherModel")
const createBook= async function (req, res) {
    let book = req.body
    const {name, rating, publisher,author,price} = req.body
    if(!author){
        return res.send({status:false, message:  'author is mandatory'})
    }
    if(!publisher){
        return res.send({status:false, message:  'publisher is mandatory'})
    }
    // if found - will return complete authr docu
    //else if not found - w ill return null
    const authorDetails = await authorModel.findOne({_id: author})
    if(!authorDetails){
        return res.send({status:false, message:  "author dosen't exist"})
    }

    const publisherDetails = await PublisherModel.findOne({_id:publisher})
    if(!publisherDetails){
        return res.send({status:false, message:  "publisher dosen't exist"})
    }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('publisher')
    res.send({data: specificBook})

}

const authoridNot = async function (req,res){
    let specificBook = await bookModel.find()
    res.send({data: specificBook})




}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.authoridNot=authoridNot