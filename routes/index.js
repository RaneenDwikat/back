const express = require('express')
const actions = require('../methods/actions')
const user = require('../models/user')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})

router.post('/addworker',actions.addNewWorker)
router.post('/addmanager',actions.addNewManager)
router.post('/adduser',actions.addNew)
router.post('/addservice',actions.addNewService)
router.post('/addorder',actions.addNewOrder)
//@desc Authenticate a user
//@route POST /authenticate
router.post('/authenticate', actions.authenticate)
router.post('/authenticatem', actions.authenticatem)
router.post('/authenticatew', actions.authenticatew)

//@desc Get info on a user
//@route GET /getinfo
router.get('/getlocation/:name', actions.getlocation)
//save reg, lat,long to database
router.put('/savelocation',actions.savelocation)
//delete user
router.delete('/d_user',actions.d_user)
//delete worker
router.delete('/d_worker',actions.d_worker)
//get dynamic category client home page
router.get('/getcategory', actions.getcategory)
//get dynamic services according to its category
router.get('/getservice', actions.getservice)

module.exports = router