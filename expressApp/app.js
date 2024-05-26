// app.js
const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware for serving static files
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', indexRouter);
app.use('/new', usersRouter);
app.use('/create', indexRouter);

// Error handling
app.use((req, res, next) => {
  res.status(404).render('error', { message: 'Page Not Found' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

module.exports = app;
