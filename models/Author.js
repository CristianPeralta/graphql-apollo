
import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: String,
  age: String,
  books: [String],
}, {
  timestamps: true,
});

const author = mongoose.model('author', authorSchema);

export default author;