import User from "./userModel";
import Turma from "./turmaModel";

User.belongsToMany(Turma, { through: 'User_Profiles' });
Turma.belongsToMany(User, { through: 'User_Profiles' });

export{
    User,
    Turma
};