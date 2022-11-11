const UserModel = require("../models/user");

const users = [ // Criação de Usúarios para teste
    {
        user_id:0,
        nome: "Amanda",
        idade: 19,
        cpf: 14551667610,
        sexo: "feminino",
        endereco: "Rua Rio Grande Bairro Novo Riacho numero 225",
        cidadeestado: "Contagem Minas Gerais",
        telefone: "35650057",
        email: "amandafernandesalves11@gmail.com",
        senha: "AmandinhafofisS2",
        confirmacaosenha: "AmandinhafofisS2",
    }
];


module.exports = {
    async create(request, response){

        try {
            const newUser = request.body;
            const result = await UserModel.create(newUser);
            return response.status(200).json({user_id: result});

        } catch (error) {
            
            console.warn("User create failed: ", error);
            return response.status(500).json({notification: "Internal server erros while trying to create User"});
        }
    },

    async getById(request, response){
        try {
            const {user_id} = request.params;
            const result = await UserModel.getByID(user_id);

            return response.status(200).json(result);
        } catch (error) {
            console.warn("User get failed: ", error);

            return response.status(500).json({
                notification: "Internal server erros while trying to get Users",
            });
        }
    },

    async update(request, response){
        try {
            const {user_id} = request.params;
            const newUser = request.body;
            await UserModel.updateById(user_id, newUser);

            return response.status(200).json({ notification: "User updated sucessfully"});

        } catch (error) {
            console.warn("User update failed: ", error);

            return response.status(500).json({notification: "Internal server erros while trying to update User"});
        }
    },

    async delete(request, response){
        try {
            const {user_id} = request.params;
            const result = await UserModel.deleteById(user_id);

            if (result === 0){
                return response
                .status(400)
                .json({ notification: "user_id not found" });
            }
            
            return response
            .status(200)
            .json({ notification: "User deleted sucessfully"});

        } catch (error) {
            console.warn("User delete failed: ", error);

            return response.status(500).json({notification: "Internal server erros while trying to delete User"});
        }
    },
};