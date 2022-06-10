const express= require ('express');
const router= express.Router();
const ObjectId= require ('mongoose').Types.ObjectId;
const Employee = require('../model/employee.js')

//get, post, put, delete


//GET API
router.get('/', (req, res)=>{
    Employee.find((err,doc)=>{
        if(err){
            console.log("Error in Post request" +err)
        }else{
            res.send(doc)
        }
    })
})

// GET single Employee API
router.get('/:id', (req,res)=>{
        if(ObjectId.isValid(req.params.id)){
            Employee.findById(req.params.id, (err,doc)=>{
                if(err){
                    console.log("Error in Post request" +err)
                }else{
                    res.send(doc)
                }
            })
        }else{
            return res.status(400).send('No record found with this ID: ' +req.params.id);
        }
})

//POST API
router.post('/', (req,res)=>{
  
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        dept: req.body.dept
    });
    emp.save((err, doc)=>{
        if(err){
            console.log("Error in Post request" +err)
        }else{
            res.send(doc)
        }
    })
})

// Put API
router.put('/:id', (req,res)=>{
    let emp =({
        name: req.body.name,
        position: req.body.position,
        dept: req.body.dept
    });

    if(ObjectId.isValid(req.params.id)){
        Employee.findByIdAndUpdate(req.params.id, {$set:emp}, {$new:true}, (err,doc)=>{
            if(err){
                console.log("Error in Update request" +err)
            }else{
                res.send(doc)
            }
        })
    }else{
        return res.status(400).send('No record found with this ID: ' +req.params.id);
    }
})

// Delete API
router.delete('/:id', (req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        Employee.findByIdAndRemove(req.params.id, (err,doc)=>{
            if(err){
                console.log("Error in delete request" +err)
            }else{
                res.send(doc)
            }
        })
    }else{
        return res.status(400).send('No record found with this ID: ' +req.params.id);
    }
})



module.exports = router;