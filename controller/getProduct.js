const db = require('./database/dbCon')


const getProduct = async(req,res)=>{
    try{
        const id = req.params.id;
        console.log(id);


        const dbCon = await db.dbConnection();
        const collection = await dbCon.collection('product');

        const data = {
            "id":Number(id)
        };

        const getProduct = await collection.findOne(data);
        console.log(getProduct);

        await db.close();
        
        res.json({
            statusCode:200,
            body:getProduct
        });

    }catch(e){
        res.json({
            statusCode:500,
            body:e.message
        });
    }
}

module.exports = getProduct;