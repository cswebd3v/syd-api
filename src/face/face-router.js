const path = require('path')
const express = require('express')
//const xss = require('xss')
const FaceService = require('./face-service')
const JsonParser = express.json()

const FaceRouter = express.Router();

FaceRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db');

        FaceService.getAllFaces(knexInstance)
            .then(faces => {
                res.json(faces)
            })
            .catch(next)
    })

FaceRouter
    .route('/:face_id')
    .all((req, res, next) => {
        const knexInstance = req.app.get('db');

        FaceService.getFaceById(knexInstance, req.params.face_id)
            .then((face) => {
                res.json(face);
            })
            .catch(next)
    })

module.exports = FaceRouter;