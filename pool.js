const mongoose=require('mongoose')

const pool=mongoose.connect('mongodb+srv://tanishkaDb:Ze3wXDNXDvEBsD3q@cluster0.g2jxbm3.mongodb.net/?retryWrites=true&w=majority',{
    dbName:'imageHash'
})

const userSchema=new mongoose.Schema({
    
    carId:String,
    carImageHash:String

})

const image=mongoose.model('images',userSchema,'images')



module.exports={
    image,pool
}