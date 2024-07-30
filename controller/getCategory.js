const db = require('./database/dbCon');

const getCategory = async (req,res)=>{
    try{
        const dbCon = await db.dbConnection();
        const collection = await dbCon.collection('category');

        const category = await collection.find().toArray();

        return res.json({
            statusCode:200,
            body:category
        });

    }catch(e){
        return res.json({
            statusCode: 500,
            body: e.message
        });
    }
}

module.exports =getCategory;