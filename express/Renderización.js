app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});
