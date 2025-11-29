export const fetch = async(req,res)=> {
    try {
       return res.json({message: "Hey there! This is the user fetch controller."});

    }catch(error){
        res.status(500).json({error: "Server Error"});
    }
}