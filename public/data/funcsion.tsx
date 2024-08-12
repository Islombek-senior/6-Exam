//// Add
// const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;
//   setAddStudent((prev) => ({ ...prev, [name]: value }));
// };

//   const [addStudent, setAddStudent] = React.useState<Students>({
//     id: "",
//     firstName: "",
//     lastName: "",
//     grade: "",
//     email: "",
//     phone: "",
//   });

// const addStudentAdd = () => {
//   setStudentData((p) => [...p, { ...addStudent, id: uuidv4() }]);
//   handleCloseadd();
// };

//////////////////////

// edit

//   const handleSaveEdit = () => {
//     if (editStudent) {
//       setStudentsData((prev) =>
//         prev.map((student) =>
//           student.id === editStudent.id ? editStudent : student
//         )
//       );
//       handleCloseE();
//     }
//   };

//   const handleEditInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     if (editStudent) {
//       setEditStudent((prev) => ({ ...prev!, [name]: value }));
//     }
//   };

//   const handleClickOpenE = (student: Students) => {
//     setEditStudent(student);
//     setOpenE(true);
//   };

// const [editStudent, setEditStudent] = useState<Students | null>(null);
