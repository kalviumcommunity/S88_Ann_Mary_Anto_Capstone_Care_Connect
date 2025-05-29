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
export const createNurse=async(req, res) => {
    const nurse = req.body; 
    if (!nurse.name || !nurse.email ||!nurse.phone || !nurse.specialty || !nurse.experience || !nurse.available ||!nurse.address ||!nurse.certifications) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }
    
    const newNurse = new Nurse(nurse);
    
    try {
        await newNurse.save();
        res.status(201).json({ success: true, data: newNurse });   
    } catch (error) {
        console.error("Error in creating user:", error.message); 
        res.status(500).json({ success: false, message: "Server Error" });
    }
};


export const updateNurse= async(req,res)=>{
    const { _id } = req.params;
    const updatedData = req.body;

    try {
        const nurse = await Nurse.findById(_id);
        if (!nurse) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const updatedNurse = await Nurse.findByIdAndUpdate(_id, updatedData, { new: true });
        res.status(200).json({ success: true, message: "User updated", patient: updatedNurse });
    } catch (error) {
        console.error("Error in updating user:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};