const express = require('express');
const router = express.Router();

const Url = require('../model/URL');

// @route   GET /:code
// @desc    Redirect to the longURL
router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code });

        if(url){
            res.redirect(url.longUrl);
        } else {
            res.status(404).json('No URL found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server Error');
    }
});

module.exports = router;