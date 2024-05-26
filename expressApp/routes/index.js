// routes/index.js
const express = require('express');
const router = express.Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Mayowa",
      added: new Date()
    }
 ];
router.get('/', (req, res) => {
     
  res.render('index', { title: 'Home', messages: messages });
// res.send('This is the home page')
});

router.get('/create', (req, res)=>{
    res.render('forms', { title: 'Create'});
});

router.post('/create', (req,res)=>{
    const message = (req.body);
    console.log(message)
    messages.push({text: message.msgtext, user: message.author, added: new Date()});
    res.redirect('/')
})
module.exports = router;
