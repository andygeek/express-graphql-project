const connectDB = require('./db');
// Esta dependencia transforma de un string a un objeto id de mongo
const { ObjectId } = require('mongodb');

module.exports = {
  Query: {
    getCourses: async () => {
      let db;
      let courses = [];
      try {
        db = await connectDB();
        courses = await db.collection('courses').find().toArray();
      } catch (error) {
        console.log(error);
      }
      return courses;
    },
    getCourse: async (root, { id }) => {
      let db;
      let course;
      try {
        db = await connectDB();
        course = await db.collection('courses').findOne({ _id: ObjectId(id) });
      } catch (error) {
        console.log(error);
      }
      return course;
    },
  },
};
