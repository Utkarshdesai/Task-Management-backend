const mongoose = require ('mongoose')
const task = require ('../models/Taskmodel')

const CreateTask = async (req,res) => {

    try {
        
    const {title ,description } = req.body 

    console.log(title ,description)

    if(!title || !description ) 
    {
        return res.status(400).json({message : 'All fields are required'})
    }
    
    const newtask = await task.create({
        title, 
        description
    })

    res.status(200).json({
        success: true,
        message : ' Task is created sucessfully' ,
        newtask
    })



    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Task is not created.",
        })
    }        
    
}

const GetAllTask = async (req,res) => {
    try {
       
        const alltask = await task.find({})

        res.status(200).json({
            success: true,
            message : 'Task is fetched sucessfully' ,
            alltask
        })
        

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error while fetching all task.",
        })  
    }
}

const UpdateTask = async (req,res) => {

    try {
       
        const {id} = req.params
        const {title , description} = req.body
        console.log(title , description )
    
        const updatetask = await task.findByIdAndUpdate(
            { _id : id} ,

            {
            title : title , 
            description : description
            }, 

            {new:true},    
        )
    
        res.status(200).json({
            success: true,
            message : 'Task is updated sucessfully' ,
            updatetask
        })
    } catch (error) {
        
        res.status(500).json( 
            {
                status :false ,
                data : 'internal server error'  ,
                message : "data not found"
           }
        )
    }

    
}

const DeleteTask = async(req,res) => {
    try {

        const {id} = req.params 

        const deletetask = await task.findByIdAndDelete(id)

        res.status(200).json({
        
            status :true ,
            message : `task for given ${id} is deleted`
            
        
    })
        
    } catch (error) {
        res.status(500).json( 
            {
                status :false ,
                data : 'internal server error'  ,
                message : "task not found"
           }
        )
    }

 

}

const Taskbyid = async (req,res) => {

    try {

        const {id} = req.params

        const taskbyid = await task.findById(id)
       
        res.status(200).json({
                success: true,
                message : 'Task is found sucessfully' ,
                data: taskbyid
            })

    } catch (error) {
        
        res.status(500).json( 
            {
                status :false ,
                data : 'internal server error'  ,
                message : "task is not found"
           }
        )
    }
    
}

module.exports = {
    CreateTask, UpdateTask , DeleteTask , Taskbyid , GetAllTask
}