const mongoose=require('mongoose');
const con=mongoose.connect("mongodb://localhost:27017/myTable",
        {useNewUrlParser: true,  useUnifiedTopology: true },
            (err)=>{
                    if (err) throw err;
                    console.log("Database Connected");
})
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
module.exports =con