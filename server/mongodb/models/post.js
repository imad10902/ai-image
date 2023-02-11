import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;

// A Mongoose schema is used to define the structure of documents in a MongoDB collection.
//The Post schema is an object that defines the fields and types of the documents that will be stored in the MongoDB collection. 



//A Mongoose model is a construct that represents a collection in a MongoDB database and is responsible for CRUD (create, read, update, and delete) operations on the documents in the collection.
//The mongoose.model() method takes two arguments:

//The first argument is a string that represents the name of the model. It's also used to determine the name of the collection in the MongoDB database.
//The second argument is a Mongoose schema that defines the structure of the documents in the collection.
//Every collection in mongodb has a model and schema object. Schema object to define structure of documents in that collection, model for CRUD