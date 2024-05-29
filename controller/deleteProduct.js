const deleteProduct = async(req,res)=>{
    try{
        res.json({
            statusCode:200,
            body:"Product Deleted"
        });

    }catch(e){
        res.json({
            statusCode:500,
            body:e.message
        });
    }
}

module.exports = deleteProduct;