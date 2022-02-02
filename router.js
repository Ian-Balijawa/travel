const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
	res.render('home');
});

router.get('/gallery', (req, res) => {
	res.render('gallery');
});

router.get('/contact', (req, res) => {
	res.render('contact');
});

router.get('/explore', (req, res) => {
	res.render('explore');
});

router.get('/about', (req, res) => {
	res.render('about');
});

router.get('/blog', (req, res) => {
	res.render('blog');
});

module.exports = router;
