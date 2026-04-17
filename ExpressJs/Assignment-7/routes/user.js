const express = require('express')
const {users} = require('../data/users.json')

const router = express.Router()

router.get('/',(req, res) => {
    res.status(200).json(users)
})

router.get('/:id',(req, res) => {
    const {id} = req.params;
    const user = users.find((each) => each.id === id)
    if(!user){
        res.status(404).json({
            success: false,
            message: "user not found"
        })
    }else{
        res.status(200).json({
            success: true,
            data: user
        })
    }
})

router.post('/',(req, res) => {
    const {id, name, email} = req.body;
    if(!id || !name || !email){
        res.status(404).json({
            success: false,
            message: "Enter Required Parameter"
        })
    }
    const user = users.find((each) => each.id === id);
    if(user){
        res.status(409).json({
            success: false,
            message: "user already exist"
        })
    } 
    users.push({
        id,
        name,
        email
    })
    res.status(201).json({
        success: true,
        message: "user has been created"
    })
})

router.put('/:id',(req, res) => {
    const {id} = req.params;
    const {data} = req.body;
    const user = users.find((each) => each.id === id);
    if(!user){
        res.status(404).json({
            success: false,
            message: "user not found"
        })
    }

    // Object.assign(user, data)
    const updatedUser = users.map((each) => {
        if(each.id === id){
            return{
                ...each,
                ...data
            }
        }
    })

    res.status(200).json({
        success: true,
        message: "user has been updated"
    })
})

router.delete('/:id',(req, res) => {
    const {id} = req.params;
    const user = users.find((each) => each.id === id)
    if(!user){
        res.status(404).json({
            success: false,
            message: "user not found"
        })
    }

    const index = users.indexOf(user)
    users.splice(index, 1)

    res.status(200).json({
        success: true,
        message: "user has been deleted"
    })
})

module.exports = router;