const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../model/URL');

// @route   POST /api/url/shorten
// @desc    Create short URL
router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get('baseUrl');

    //Check Base Url
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid Base Url');
    }

    //Create Url Code
    const urlCode = shortid.generate();

    //Check long Url
    if(!validUrl.isUri(longUrl)) {
        return res.status(401).json('Invalid Long Url');
    } else {
        try {
            let url = await Url.findOne({ longUrl });

            if(url) {
                res.json(url);
            } else {
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url({
                    urlCode,
                    longUrl,
                    shortUrl
                });

                await url.save();
                res.json(url);
            }
        } catch (err) {
            console.error(err);
            res.status(500).json('Internal Server Error');
        }
    }
});


module.exports = router;