import User from "../model/userModel.js";

export const create = async(req,res)=> {
    try{
        const userData= new User(req.body); 
        const {email} =userData; 

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User with this email already exists"});
        }

        const savedUser= await userData.save();
        res.status(200).json({message: "User created successfully", user: savedUser});

    }
    catch(error){
        res.status(500).json({error: "Server Error"});
    }
}

export const fetch = async(req,res)=> {
    try {
       const users = await User.find({});
       if(users.length === 0){
        return res.status(404).json({message: "No users found"});
       }

       res.status(200).json({users});

    }catch(error){
        res.status(500).json({error: "Server Error"});
    }
}

export const update =async(req,res)=> {
    try{
        const {id} = req.params;
        const userExists = await User.findById(id);
        if(!userExists){
            return res.status(404).json({error: "User not found"});
        }
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.status(201).json({message: "User updated successfully", user: updatedUser});

    }catch(error){
        res.status(500).json({error: "Server Error"});
    }
}
