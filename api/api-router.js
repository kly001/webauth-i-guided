const bcrypt = require('bcryptjs')
const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});
//------------------------------------------------------------------
// Challenge:
//   read a password from the body
//   hash the password using bcryptjs
//   return it to the user in an object that looks like:
//  {password:'original password', hash:'hashed password'}

router.post('/hash', (req,res) => {
 const password = req.body.password
 const hash = bcrypt.hashSync(password,8)
 res.status(200).json({password, hash})
})
module.exports = router;
