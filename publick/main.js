const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','html','index.html'));
});
app.get('/main', function(req, res){
  res.sendFile(path.join(__dirname, 'dist','html','main.html'));
});
app.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'product.html'));
});
app.get('/product/:id', (req, res) => {
  const productId = req.params.id;
  res.sendFile(path.join(__dirname, 'public', 'dist', 'product', `${productId}.html`));
});
app.get('/paymentrequest', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'dist', 'paymentrequest.html'));
});
app.get('/usagehistory', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'dist', 'usagehistory.html'));
});
app.get('/userinfo', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'dist', 'userinfo.html'));
});
app.get('/payment', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'dist', 'payment.html'));
});
app.get('/payment', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'dist', 'payment.html'));
});
app.get('/kia', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'dist', 'kia.html'));
});
app.listen(5500, () => console.log(`START http://localhost:5500/`));

//import "./html/components/breadcrums";
//import "./html/pages";