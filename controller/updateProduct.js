const db = require('./database/dbCon');

const updateProduct = async (req, res) => {
    try {
        const data = req.body;
        if(data.id=="" || data.name=="" || data.unit=="" || data.category=="" || data.brand=="" || data.description=="" || data.price=="" || data.stock=="" || data.image==""){
            return res.json({
                statusCode:400,
                body:"Data should not be empty"
            });
        }
        const dbCon = await db.dbConnection();
        const collection = await dbCon.collection('product');

        const data1 = {
            "id": Number(data.id)
        };

        const getProduct = await collection.findOne(data1);
        console.log(getProduct);
        if (getProduct == null) {
            return res.json({
                statusCode: 404,
                body: "Data not found"
            });
        } else {
            let dataObj = {
                "name": data.name,
                "size": data.size,
                "unit": data.unit,
                "category": data.category,
                "brand": data.brand,
                "description": data.description,
                "price": data.price,
                "stock":data.stock,
                "image": data.image
            }

            let newValue = {
                $set: dataObj
            }

            await collection.updateOne(data1,newValue);

            console.log(newValue);
            res.json({
                statusCode: 200,
                body: "Data updated"
            });
        }
    } catch (e) {
        return res.json({
            statusCode: 500,
            body: e.message
        });
    }
}

module.exports = updateProduct;