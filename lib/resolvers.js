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
  getCourses: () => {
    return courses;
  },
};
