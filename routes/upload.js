const express= require("express");
const router = express.Router();

router.get("/", async(req,res) => {
  res.json({msg:"Welcome to  upload"});
})
router.post("/", async(req,res) => {
    let myfile=req.files.myfile_up;
    console.log(myfile);
    myfile.mv("public/"+myfile.name,(err)=>{
      if (err)
      {
       return res.status(401).json({"msg":err});
      }
      res.json({msg:"sucsses upload file"});
    })
  

  })
module.exports = router;