const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authToken = async (req, res, next) => {
  // const token = req.header('x-auth-token');
  const authorizationHeader = req.header('Authorization');
  const token = authorizationHeader && authorizationHeader.split(' ')[1];
  // Check for token
  if (!token)
    return res.status(400).json({ messge: 'No token, authorization denied' });
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.AccessTokenSecret)
    console.log(decoded.id)
    req.user = decoded.id;
    if (decoded)
      next();
  }
  // Add user from payload
  catch (e) {
    res.status(400).json({ messge: 'Token is not valid' });
  }
}

module.exports = authToken