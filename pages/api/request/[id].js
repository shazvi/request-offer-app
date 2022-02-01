import {connectToDatabase} from "../../../libs/mongodb";
import {ObjectId} from "mongodb";

export default async function requestHandler(req, res) {
    if(req.method === "GET") {
        try {
            let { db } = await connectToDatabase();
            let { id } = req.query;

            let requestData = await db.collection('request-offer-col').findOne({ "_id": ObjectId(id)});

            return res.status(200).json({
                data: requestData,
                success: true,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
            });
        }
    }
}
