import mongoose from "mongoose";

interface data {
  title: string;
  category: string;
  coverImage: string;
  summary: string;
  views: [];
  ISBN: string;
  author: string;
  author_image: string;
}
interface Idata extends data, mongoose.Document {}


const schema = new mongoose.Schema(
  {
    title: String,
    category: String,
    coverImage: String,
    summary: String,
    views: [],
    ISBN: String,
    author: String,
    author_image: String,
  },
  { timestamps: true }
);

export default mongoose.model<Idata>("books", schema)
