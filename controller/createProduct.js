const dbCon = require('./database/dbCon');

const createProduct = async(req,res)=>{
    try{
        const data = req.body;
        console.log(data);
        let image = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";
        if(data.image == ""){
            console.log("Image not found");
            // image = "no image url"
        }
        
        if(data.name=="" && data.size=="" && data.category=="" && data.brand=="" && data.description == "" && data.price == "" && data.stock == ""){
            res.json({
                statusCode:404,
                body:"Data should not be empty"
            });
        }

        const dbConnection = await dbCon.dbConnection(); 
        const collection = await dbConnection.collection('product');
        const product = {
            "id":Date.now(),
            "name":data.name.toLowerCase(),
            "size":data.size,
            "category":data.category.toLocaleUpperCase(),
            "brand":data.brand.toLocaleUpperCase(),
            "description":data.description,
            "price":data.price,
            "stock":data.stock,
            "image":image
        }

        console.log(product);

        await collection.insertOne(product);
        await dbCon.close();

        res.json({
            statusCode:201,
            body:"Product Created"
        });

    }catch(e){
        res.json({
            statusCode:500,
            body:e.message
        });
    }
}

module.exports = createProduct;