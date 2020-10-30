const courses = [
  {
    _id: 'anyId',
    title: 'Mi titulo 1',
    teacher: 'Mi profesor',
    description: 'Una descripcion',
    topic: 'programacion',
  },
  {
    _id: 'anyId',
    title: 'Mi titulo 2',
    teacher: 'Mi profesor',
    description: 'Una descripcion',
    topic: 'programacion',
  },
  {
    _id: 'anyId',
    title: 'Mi titulo 3',
    teacher: 'Mi profesor',
    description: 'Una descripcion',
    topic: 'programacion',
  },
];

module.exports = {
  Query: {
    getCourses: () => {
      return courses;
    },
    getCourse: (root, args)=>{
      const course = courses.filter(course => course._id === args.id);
      return course.pop();
    }
  },
};
