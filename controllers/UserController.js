const User = require("../models/User");


const Register = async (_userName, _firstName , _email, _password, _age) => {
    try {
        let data = await User.create({ userName : _userName, firstName: _firstName, email :_email, password:_password, age :_age});
        if (data) {
            console.log("user was registered successfully", data)
        }
        else {
            console.log("error");
        }
    }
    catch (e) {
        console.log(e);
    }

}

// done
const Login = async (_email, _password) => {
    try {
        let data =await User.find({ email: _email, password: _password });
        if (data) {
            console.log("Good, Now You can enter my dashboard");
        }
    }
    catch (e) {
        console.log(e);
    }
}


// Return the first name of registered users 
const GetAllUsers = async ()=>{
    try {
        let data = await User.find( {} , {firstName: 1});
        if (data) {
            console.log("Done", data);
        }
    } catch (error) {
        console.log(error);
    }
} 

// Delete the user  
const DeleteUser = async (_email)=>{
    try {
        let data =await User.deleteOne({email: _email});
        if(data){
            console.log('Deleted Succesfully');
        }
    } catch (error) {
        console.log(error);
    }
}


// editUser(email, editvalue) 
const UpdateUser= async (_email, editEmail) =>{
    try {
        let data = await User.findOneAndUpdate(
            {email: _email},
            {email: editEmail}
            );
            if (data) {
                console.log('user was edited successfully', data);
            }
    } catch (error) {
        console.log(error);
    }
}




module.exports = { Register, Login, GetAllUsers , DeleteUser, UpdateUser};