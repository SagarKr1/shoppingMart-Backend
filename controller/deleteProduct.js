const db = require('./database/dbCon');


const deleteProduct = async(req,res)=>{
    try{
        const data = req.body;
        console.log(data);

        const dbCon = await db.dbConnection();
        const collection = await dbCon.collection('product');

        const deleteProduct = {
            "id":Number(data.id)
        }
        await collection.deleteOne(deleteProduct);
        await db.close();
        return res.json({
            statusCode:200,
            body:"Product Deleted"
        });

    }catch(e){
        return res.json({
            statusCode:500,
            body:e.message
        });
    }
}

module.exports = deleteProduct;