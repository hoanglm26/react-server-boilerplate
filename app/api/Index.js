/**
 * Created by khaip on 12/17/2015.
 */

import express from 'express';

const Router = express.Router();

Router.get('/123', (req, res) => {
    res.send("You are a winner 123 456 ");
});

export default Router;