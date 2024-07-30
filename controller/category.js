const db = require('./database/dbCon');

const category = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        if (data.category == "") {
            return res.json({
                statusCode: 404,
                body: "Data should not be empty"
            });
        }

        const dbCon = await db.dbConnection();
        const collection = await dbCon.collection('category');

        const check = {
            category: data.category.toLowerCase()
        }

        const getCategory = await collection.findOne(check);
        console.log(getCategory);

        if(getCategory!=null){
            return res.json({
                statusCode:404,
                body:"Already Created"
            });
        }

        const upload = {
            "category": data.category.toLowerCase(),
            "date": Date.now(),
            "pk": 1
        }

        console.log(upload);

        await collection.insertOne(upload);
        await db.close();

        return res.json({
            statusCode: 200,
            body: "Data created"
        });

    } catch (e) {
        return res.json({
            statusCode: 500,
            body: e.message
        });
    }
}

module.exports = category;