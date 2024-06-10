const db = require('./database/dbCon');


const Product = async(req,res)=>{
    try{
        const dbCon = await db.dbConnection();
        const collection = await dbCon.collection('product');

        const product = await collection.find().toArray();
        
        await db.close();

        res.json({
            statusCode:200,
            body:product
        });

    }catch(e){
        res.json({
            statusCode:500,
            body:e.message
        });
    }
}

module.exports = Product;