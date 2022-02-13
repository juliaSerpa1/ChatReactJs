const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat").StreamChat;
const crypto = require("crypto");


const signup = async (req,res) => {
    try{
        const { fullName, userName, password, phoneNumber} = req.body;

        const userId = crypto.randomBytes(16).toString("hex");

        const serverClient = connect(api_key, api_secret, app_id);

        const hashedPassword = await bcrypt.hash(password, 10);

        const token = serverClient.createUserToken(userId);

        res.status(200).json({ token, fullName, userName, userId, hashedPassword, phoneNumber});
    }catch(error){
        console.log(error);

        res.status(500).json({ message: error });
    }
};

const login = async(req, res) =>{
    try{
        const { userName, password} = req.body
    }catch{
        
    }
};
