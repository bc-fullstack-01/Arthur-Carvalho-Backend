const express = require('express');
const router = express.Router();

router.route("/")
    .all((req, res, next) => {
        console.log(`Request from : ${req.originalUrl}`);
        console.log(`Request from : ${req.method}`);
        console.log(`Request from : ${req.params}`);
        next();
    })
    .get((req, res) => {
        console.log(req.params);
        res.send(JSON.stringify([]));
        res.status(201);
        res.end();
    })
    .post((req, res) => {
        console.log(req.body);
        res.status(201);
        res.end();
    });

router
    .param('id', (req, res, next, id ) => {
        console.log(`Request from : ${req.params}`);
        console.log(`Request from : ${req.method}`);
        console.log(`Request id : ${id}`);
        next();
    })
    .route("/:id")
    .get((req, res) => {
        console.log(req.params);
        res.send(JSON.stringify({}));
        res.status(200);
        res.end();
    })
    .put((req, res) => {
        console.log(JSON.stringify({}));
        res.status(200);
        res.end();
    })
    .delete((req, res) => {
        res.status(203);
        res.end();
    })

module.exports = router;