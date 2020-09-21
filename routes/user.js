const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send('login');
});

router.get('/reg', (req, res) => {
    res.send('reg');
});

router.get('/dash', (req, res) => {
    res.send('dash');
});

module.exports = router;