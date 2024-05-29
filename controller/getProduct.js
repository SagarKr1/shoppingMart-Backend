const getProduct = async(req,res)=>{
    try{
        const id = req.params.id;
        res.json({
            statusCode:200,
            body:"Product id is "+id
        });

    }catch(e){
        res.json({
            statusCode:500,
            body:e.message
        });
    }
}

module.exports = getProduct;