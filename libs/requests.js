import {connectToDatabase} from "./mongodb";
import {ObjectId} from "mongodb";

export async function GetAllRequestIds() {
    let {db} = await connectToDatabase();
    return db
        .collection("request-offer-col")
        .find({})
        .project({_id: 1})
        .map(x => x._id)
        .toArray();
}

export async function GetRequestById(id) {
    let {db} = await connectToDatabase();
    return db.collection("request-offer-col").findOne({ "_id": ObjectId(id)});
}
