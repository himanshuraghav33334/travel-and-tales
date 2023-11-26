const mongoose = require('mongoose');

const mongoURI='mongodb+srv://pgaurav2022:root@cluster0.fme6wjd.mongodb.net/gofoodmern?retryWrites=true&w=majority';
// const mongoD=async()=>{
//     await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
//         if(err) console.log("---",err);
//         else{
//         console.log("Connected");
//        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray(async(err,data)=>{
//         if(err) console.log(err);
//         else{
//             console.log(fetched_data);
//         }
//     });
//     }
// });
// }
const mongoD = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });

        console.log("Connected");

        const collection = mongoose.connection.db.collection("food_items");
        const fetched_data = await collection.find({}).toArray();

        console.log(fetched_data);
    } catch (err) {
        console.log("---", err);
    }
};

module.exports=mongoD;