const db = require('./database/dbCon');

const deleteCategory = async (req,res)=>{
    try{
        const data = req.body;
        console.log(data);

        if(data.category==""){
            return res.json({
                statusCode:404,
                body:"Data should not be empty"
            });
        }

        const dbCon = await db.dbConnection();
        const collection = await dbCon.collection('category');

        const deleteCategory = {
            "category":data.category.toLowerCase()
        }
        await collection.deleteOne(deleteCategory);
        await db.close();

        return res.json({
            statusCode:200,
            body:"Category Deleted"
        });

    }catch(e){
        return res.json({
            statusCode: 500,
            body: e.message
        });
    }
}

module.exports =deleteCategory;