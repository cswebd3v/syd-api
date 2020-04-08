const path = require('path')
const express = require('express')
//const xss = require('xss')
const FaceService = require('./face-service')
const JsonParser = express.json()

const FaceRouter = express.Router();

FaceRouter
    .route('/faces')
    .get((req, res, next) => {

        FaceService.getAllFaces(req.app.get('db'))
            .then(faces => {
                res.json(faces)
            })
            .catch(next)
    })


FaceRouter
    .route('/faces/genders/:gender')
    .get((req, res, next) => {

        FaceService.getFaceByGender(req.app.get('db'), req.params.gender)
                .then((faces) => {
                    res.json(faces);
                })
                .catch(next)
    })

FaceRouter
    .route('/faces/ages/:age')
    .get((req, res, next) => {

        FaceService.getFaceByAge(req.app.get('db'), req.params.age)
                .then((faces) => {
                    res.json(faces);
                })
                .catch(next)
    })

FaceRouter
    .route('/both/:gender/:age')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db');

        FaceService.getFaceByBoth(knexInstance, req.params.gender, req.params.age)
                .then((faces) => {
                    res.json(faces);
                })
                .catch(next)
    })
module.exports = FaceRouter;