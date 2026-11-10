import Turma from "../models/turmaModel.js";

const createTurma = async (req, res) => {
    const newTurma = req.body;
     try {
        const turmaDB = await Turma.create(newTurma);    
        res.json({success: true , data:turmaDB});
    } catch (error) {
        res.json({success: false, data:{message: error.message}})
    }

};


export{
    createTurma
}