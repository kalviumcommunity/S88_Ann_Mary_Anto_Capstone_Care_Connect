import Nurse from '../models/Nurse.js'

export const getNurse=async(req,res)=>{
    try{
        const nurse =await Nurse.find({});
        res.status(200).json({sucess:true, data:nurse});  
    }catch(error){
        console.error("error in fetching the users",error.message);
        res.status(500).json({sucess:false,message:"Server Error"});    
    }
};
