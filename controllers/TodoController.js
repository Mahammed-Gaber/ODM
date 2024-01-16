const Todo = require('../models/Todo');
const User= require('../models/User')

const createTodo = async (_title, _tags, _userId)=>{

    try{
        let data = await Todo.create({
            title :_title,
            tags : _tags,
            userId: _userId
        })

        if(data){
            console.log('Done', data);
        }
    }
    catch (err){
        throw err;
    }
}

const filterTodo = async (_title)=>{
    try {
        let data= await Todo.find({title: _title});
        if (data) {
            console.log(data);
        }
        else{
            console.log('Todo not exist');
        }
    }
    catch (error) {
        console.log(error);
    }
}

// getTodos(userid) 


// show all Todo by using User id
const getTodos =async (_userId)=>{
    try {
        let data = await Todo.find({userId: _userId});
        if (data) {
            console.log(`Todo list is`, data);
        }
    } catch (error) {
        console.log(error);
    }
}

// Updata Todo

const updateTodo= async (_todoid, _editdata)=>{
    try {
        let data =await Todo.findOneAndUpdate(
            {_id: _todoid},
            {title: _editdata}
            );
            if (data) {
                console.log('Todo was updated successfully', data);
            } else {
                console.log('error');
            }
    } catch (error) {
        
    }
} 


// delete Todo by Id

const deleteTodo = async (_todoId)=> {
    try {
        let data = await Todo.deleteOne({_id: _todoId});
        if (data) {
            console.log('Deleted Succesfully');
        }
        else{
            console.log('error');
        }
    } catch (error) {
        console.log(error);
    }
} 


module.exports= {createTodo, filterTodo, getTodos, updateTodo, deleteTodo};