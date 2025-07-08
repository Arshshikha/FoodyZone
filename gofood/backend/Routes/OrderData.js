const express= require ('express')
const router =express.Router()
const Order =require ('../models/Orders')

router.post('/orderData', async (req,res)=>{
    let data =req.body.order_data
  await data.splice(0,0,{order_date:req.body.order_date})
  let eId= await Order.findOne({"email":req.body.email})
  console.log(eId)
if (eId === null){

try{
    await Order.create({
        email:req.body.email,
        order_data:[data]
    }).then(()=>{
        res.json({success:true})
    })
}
catch(error){
    console.log(error.message)
    res.setDefaultEncoding("Server Error", error.message)
}
}
else {

    try{
await Order.findOneAndUpdate({ email:req.body.email},
    {$push:{order_data:data}}).then(()=>{
        res.json({success:true})
    })
}
catch(error){
     
     res.send("Server Error", error.message)
}
}
})
router.post("/myorderData", async (req, res) => {
    console.log("Request body received:", req.body);
    try {
        let myData = await Order.findOne({ 'email': req.body.email });
        console.log("Fetched orders:", myData);
        res.json({ orderData: myData || { order_data: [] } });
    } catch (error) {
        console.error("Server error:", error.message);
        res.status(500).json({ error: "Server Error: " + error.message });
    }
});
    
module.exports =router;