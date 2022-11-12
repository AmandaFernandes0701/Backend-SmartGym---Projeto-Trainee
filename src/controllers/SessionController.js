const Firebase = require("../utils/Firebase");
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const { EmailAuthCredential } = require("firebase/auth");

module.exports = {
    async singIn(request, response) {
        try {
            const { email, password } = request.body;

            let firebaseId;
            try {
                firebaseId = await Firebase.login(email, password);
            } catch (error) {
                return response.status(403).json({ notification: "Invalide Credentials" })
            }

            const user = await UserModel.getByFields({ firebase_id: firebaseId });

            const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "30d",
            });

            return response.status(200).json({ user, acessToken });
        } catch (error) {
            return response
                .status(500)
                .json({ notification: "Error while trying to validate credentials" });
        }
    }
}