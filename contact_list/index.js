const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
var contactList = [
  {
    name : "Dinesh Devarapalli",
    phone : "9390781183"
  },
  {
    name : "Dhayanidhi",
    phone : "6301819177"
  },
  {
    name : "Daddy",
    phone : "9704988241"
  }
]


app.get('/', function(req, res){
 return res.render('home',{
  title : "Contact List"
 }
  );
//   // console.log(__dirname);
//   // res.send('<h1>Cool, its working be cool<//h1>')
});

// app.get('/', function(req, res){
//   return res.render('practice',
//    {
//     title: "Its working"
//   });
// });
app.get('/pract', function(req, res){
  return res.render('pract', {
    title: "Its was working",
    contact_list: contactList
  });
});
app.get('/sai', function(req, res){
  return res.render('sai', {
    title: "Devarapalli Dinesh"
  });
});

app.listen(port, function(err){
  if(err){
    console.log('Error is running on the port', err);
  }
  console.log('Yup the server is running correctly in port:', port);
});