const Auth = require('../models/Auth');

const User = ({
    username : 'john@email.com',
    password : 'abc12309876'
});

app.get('/',() => {

})

app.get('/home',(req, res) => {
    
})

app.get('/login',(req, res) => {
    
})

app.get('/logout',(req, res) => {
    
})

app.get('/register',(req, res) => {
    
})

app.post('/login',(req, res) => {
   const{username, password, confirmpassword}= req.body; 

   if(password==confirmpassword){
       if(User.find(user=> user.username==username)){
           res.render('register',{
               message: 'User already registered.',
               messageClass: 'alert-danger'
           });
           return;
       }
       const hashedPassword = gethashedPassword(password);

       User.push({
           username,
           password: hashedPassword 
       });

       res.render('login', {
           message: 'Registration Complete... Please login to Continue.',
           messageClass: 'alert-success'
       });
   }
   else {
       res.render('register', {
           message: 'Password does not match.',
           messageClass: 'alert-danger'
       });
   }
});

app.post('/logout',(req, res) => {
    
})

app.post('/register',(req, res) => {
    
})
