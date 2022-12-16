const express=require('express')
const app=express()
app.use(express.json())
// const {image,pool}=require('./package-lock.json')
const { image } = require('./pool')

app.get("/",(req,res)=>{
    res.send({msg:'Working'})
})

app.post('/upload',(req,res)=>{
    console.log(req.body)
    const images=new image({
        carId:req.body.carId,
        carImageHash:req.body.imageHash
    })
    images.save()
    .then((val)=>{
        console.log('uploaded')
        res.send({msg:val})
    })
    .catch((err)=>{
        console.log(err)
        res.send({err:"error "})
    })
})

app.get('/getImage',(req,res)=>{
    image.find()
    .then((val)=>{
        res.send(val)
    })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    })
})

app.listen(9909,()=>{
    console.log('Running on 9909');
})