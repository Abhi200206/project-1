// app.js (or index.js, depending on your project structure)
const express = require('express');
const app = express();
var mysql = require('mysql2');
const bodyParser = require('body-parser');


// Serve static files from the "public" directory
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
const url=__dirname ;
// Define routes
app.get('/', (req, res) => {
  // Render the "index.html" file when someone accesses the root URL '/'
  res.sendFile(url+'/public/index.html');
});
app.get('/login.html', (req, res) => {
  // Render the "index.html" file when someone accesses the root URL '/'
  res.sendFile(__dirname+'/public/login.html');
});
app.get('/signup.html', (req, res) => {
  // Render the "index.html" file when someone accesses the root URL '/'
  res.sendFile(url+'/public/signup.html');
});
app.post('/submit-form',(req,res)=>{
  console.log(req.body);
  const username = req.body.us;
  const password = req.body.psw;
  console.log(username);
  const con = mysql.createConnection({
    host: "localhost",
    user: "user1",
    password: "pswd123",
    database: "user"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = "select * from hypertrox where username = ? and password=?;";
    con.query(sql,[username,password],  function (err, result) {
      if (err)
      throw err;
      console.log("Result:", result);
      if (result.length === 0) {
        // No user found with the given credentials
        res.send('Invalid username or password');
      } else {
        const user = result[0];
        console.log("user:",user);
        res.redirect(`/user.html?username=${user.username}&email=${user.email}&Name=${user.Name}`);
      }
      
    });
  
  });
  

})
app.post('/signup',(req,res)=>{
  console.log(req.body);
  const username = req.body.user;
  const password = req.body.pass;
  const name = req.body.name;
  const email=req.body.email;
  console.log(username);
  const con = mysql.createConnection({
    host: "localhost",
    user: "user1",
    password: "pswd123",
    database: "user"
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = "INSERT INTO hypertrox VALUES (?, ?,?,?)";
    con.query(sql,[name,username,email,password],  function (err, result) {
      if (err)
      throw err;
      console.log("1 record inserted");
      
      res.redirect('/login.html');

      
      
    });
     
    });


});
app.get('/user.html',(req,res)=> {
  const username = req.query.username;
  

  res.render('user', { username });
});


// Start the server
const port = 3000; // Choose any available port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
