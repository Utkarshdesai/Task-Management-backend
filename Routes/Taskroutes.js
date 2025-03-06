const express  = require("express") ;
const router = express.Router() ; 

const { UpdateTask ,GetAllTask , CreateTask ,Taskbyid , DeleteTask } = require ('../Controllers/Task')

router.post('/task' , CreateTask)
router.get('/task' , GetAllTask)
router.get('/task/:id' , Taskbyid)
router.put('/task/:id' , UpdateTask)
router.delete('/task/:id' , DeleteTask)

module.exports = router