const express= require ('express')
const router =express.Router()

router.post("/foodData", (req,res)=>{
    try{
        if(!global.food_items)
        {
            return read.status(503).send("data not loaded ...try again later")
        }
       
        res.send([global.food_items, global.foodCategory ])

    }
    catch(error){
       console.error(error.message);
       res.send("Server Error") 
    }
})
module.exports =router;