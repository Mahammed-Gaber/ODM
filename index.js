const mongoose = require('mongoose');
const User = require('./models/User');
const Emp = require('./models/Emp');
const Client = require('./models/Client');
const Category = require('./models/Category');
const userController = require("./controllers/UserController");
const movieController = require("./controllers/MovieController");
const TodoController= require('./controllers/TodoController');


mongoose.connect('mongodb://127.0.0.1:27017/MERN').then(() => {
    console.log("connect to db");
}).catch(err => {
    console.log(err);
})

// userController.Register("Adam_Ali", "Adam Ali", "adamaliHassan@gmail.com", "246asf84dsa21asf5", 24);
// userController.Register("Asem_Sayed","Asem Sayed", "asemsayed2020@gmail.com", "246asf84dsa21asf5", 25);
// userController.Register("Mahammed_Hassan","Mahammed Hassan", "amahammedHassan@gmail.com", "8468f4addsa21asf5", 32);
// userController.Register("Nader_Fayed","Nader Fayed", "naderNader19@gmail.com", "246a31wqr4651asf5", 43);

// //           login by email & password
// userController.Login("amahammedHassan@gmail.com", "8468f4addsa21asf5");

// //          get all user and show firstName
// userController.GetAllUsers();

// //            delete by email
// // userController.DeleteUser("aliHassan2025@gmail.com")
// userController.UpdateUser('aliHassan2024@gmail.com', "aliHassan2025@gmail.com")


// User.findOne({email :"adamaliHassan@gmail.com"}).then(data=>{
//     console.log(data);
//     TodoController.createTodo('Task Thre','lll', data._id);
// })

// //             show todos by user id
// TodoController.getTodos('65a695068eca3bddb28c9025');

// //             Update Todo  from Task three to Temporary Task
// TodoController.updateTodo('65a6a74c282127c48dde243a', 'Temporary Task')

// //            deleteTodo by Id
TodoController.deleteTodo('65a69edb8a046cf938ff6280');













// Category.create({ title: "horror" }).then(data => {
//     console.log(data);
//     movieController.createMovie("The nun", "marvel movie in 2008", 9, "", data._id);
// })


// User.find().then((data) => {
//     console.log(data);
// })
// Emp.create({ name: "ahmed", age: 25, job: "SD" }).then(data => {
//     console.log(data);
// })