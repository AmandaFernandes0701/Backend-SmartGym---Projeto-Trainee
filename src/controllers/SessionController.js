const Firebase = require("../utils/Firebase");
const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");
const { EmailAuthCredential } = require("firebase/auth");

module.exports = {
    async signIn(request, response) {
        try {
            const { email, senha } = request.body;

            let firebaseId;
            try {
                firebaseId = await Firebase.login(email, senha);
            } catch (error) {
                return response.status(403).json({ notification: "Invalide Credentials" })
            }

            const user = await UserModel.getByFields({ firebase_id: firebaseId });

            const acessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
            });

            return response.status(200).json({ user, acessToken });
        } catch (error) {
            return response
                .status(500)
                .json({ notification: "Error while trying to validate credentials" });
        }
    }
}