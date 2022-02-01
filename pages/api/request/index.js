import {connectToDatabase} from "../../../libs/mongodb";

export default async function handler(req, res) {
    if(req.method === "POST") {
        try {
            let { db } = await connectToDatabase();
            let result = await db.collection('request-offer-col').insertOne(JSON.parse(req.body));

            return res.status(201).json({
                success: true,
                id: result.insertedId,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
            });
        }
    }
}
