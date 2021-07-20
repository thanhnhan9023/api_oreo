const UserSchema = require('../models/User');
const bcrypt =require('bcryptjs');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();


const  creatUser=async(req,res) =>
{
    const  {FristName,LastName,UserName,Password}=req.body;
    let RefreshToken='';
    if(!FristName || !LastName||!UserName || !Password)
    {
        return res.status(400).json({messge:'Please enter all fields'});
    }
    // check for existing user
    UserSchema.findOne({UserName}).then(
        user =>
        {
            res.status(400).json(user);
            if(user)
            return res.status(400).json({messge:'User already  exists'});
            const newUser=new UserSchema(
                {
                    FristName,
                    LastName,
                    UserName,
                    Password,
                    RefreshToken
                });
                // Create  hash password
            bcrypt.genSalt(10,(err,salt) =>{
                bcrypt.hash(newUser.Password,salt,(err,hash) =>{
                    if(err) throw err;
                    newUser.Password=hash;
                    newUser.save().then(user =>
                        {
                            res.status(200).json({
                            RefreshToken:user.RefreshToken,
                            messge:'Succes'
                         })
                    }).catch(err => res.status(400).json({messge:err}));
                })
            })
        }
    )
}

const generateTokens=payload =>{
    const acccessToken=jwt.sign(payload,process.env.AccessTokenSecret,{expiresIn:'30s'});

    const refreshToken=jwt.sign(payload,process.env.RefeshTokenSecret,{expiresIn:'30m'})

    return{acccessToken,refreshToken}
}

const updateRefreshToken= async (username,refreshToken) =>{
    return await  UserSchema.findOneAndUpdate({UserName:username},{
        $set: {
            RefreshToken:refreshToken
        },
      }, {new: true});
}

const RefreshToken=async (req,res) =>{
    const  {RefreshToken}=req.body;
    if(!RefreshToken) 
    return res.status(400).json({messge:'Token null'});
    UserSchema.findOne({RefreshToken}).then(
        user =>
        {
        if(!user) 
        return res.status(400).json({messge:'Token is not valid'});
        try {
            jwt.verify(RefreshToken,process.env.RefeshTokenSecret)
            let usernew={id:user._id}
            const token=generateTokens(usernew);
            updateRefreshToken(user.UserName,token.refreshToken);
            res.status(200).json(token);
        } catch (e) {
            res.status(400).json({messg:'Token is not valid'});
        }
    })
    // if(!user) 
    // return res.status(400).json({messge:'Token is not valid'});
    // try {
    //     jwt.verify(refreshToken,process.env.RefeshTokenSecret)
    //     let usernew={id:user._id}
    //     const token=generateTokens(usernew);
    //     updateRefreshToken(user.UserName,token.refreshToken);
    //     res.status(200).json(token);
    // } catch (e) {
    //     res.status(400).json({messg:'Token is not valid'});
    // }
}
const LoginUser=async(req,res)  =>{
    const { UserName, Password } = req.body;
    if (!UserName || !Password) 
    {
        return res.status(400).json({ messge: 'Please enter all fields' });
    }
    try {
        const user = await UserSchema.findOne({ UserName });
        if (!user) throw Error('User does not exist');

        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) throw Error('Invalid credentials');

        // const token = jwt.sign({ id: user._id }, process.env.jwSecret, { expiresIn: '5m' });
        let usernew={id:user._id};
        const token=generateTokens(usernew);
        updateRefreshToken(UserName,token.refreshToken);
        if (!token) throw Error('Couldnt sign the token');
        res.status(200).json({
            token
        });
    } catch (e) {
        res.status(400).json({ messge: e.message });
    }
}
const GetUser=async(req,res) =>{
    try {
        const user = await UserSchema.findOne(req.user.id)
        if (!user) throw Error('User does not exist');
        res.status(200).json({
            UserInfo:{
              FristName:user.FristName,
              LastName:user.LastName,
              UserName:user.UserName,
            }
        })
      } catch (e) {
        res.status(400).json({ messge: e.message });
      }
}
module.exports = {creatUser,LoginUser,GetUser,RefreshToken};


    
