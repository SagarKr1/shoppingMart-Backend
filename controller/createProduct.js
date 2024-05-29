const createProduct = async(req,res)=>{
    try{
        const data = req.body;
        console.log(data);
        let image;
        if(data.image == ""){
            console.log("Image not found");
            image = "no image url"
        }
        
        if(data.name=="" && data.size=="" && data.category=="" && data.brand=="" && data.description == "" && data.price == "" && data.stock == ""){
            res.json({
                statusCode:404,
                body:"Product not created"
            });
        }

        res.json({
            statusCode:201,
            body:"Created"
        });

    }catch(e){
        res.json({
            statusCode:500,
            body:e.message
        });
    }
}

module.exports = createProduct;