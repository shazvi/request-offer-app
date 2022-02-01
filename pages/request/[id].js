import { useRouter } from 'next/router'
import {useEffect, useRef, useState} from "react";

export default function Id() {
    const router = useRouter();
    const id = router.query.id;
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    
    useEffect(() => {
        if(id) {
            fetchRequest();
        }
    },[id]);
    
    async function fetchRequest() {
        let response = await fetch(`/api/request/${id}`);
        let responseJSON = await response.json();
        setLoading(false);
        
        if(responseJSON.success) {
            setData(responseJSON.data);
        } else {
            setError("Failed to fetch request details");
        }
    }
    
    const timelineValues = {
        1: "⚠️ Going live as soon as possible",
        2: "🗓 Going live in the near future calendar emoji",
        3: "🤔 No specific plans",
    };
    
    return (
        <>
            {loading && <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status"/>
            </div>}

            {error && <div className="alert alert-danger" role="alert">
                {error}
            </div>}
            
            <div className="container">
                <h1 className="py-5 fw-bold">Request Details</h1>
                
                <div className="card shadow-sm p-4 mt-2 request-detail-list">
                    <div className="my-2"><span className="fw-bold">Id</span>: {data._id}</div>
                    <div className="my-2"><span className="fw-bold">Full name</span>: {data.fullName}</div>
                    <div className="my-2"><span className="fw-bold">Email</span>: {data.email}</div>
                    <div className="my-2"><span className="fw-bold">Company</span>: {data.company}</div>
                    <div className="my-2"><span className="fw-bold">Company address</span>: {data.companyAddress}</div>
                    <div className="my-2"><span className="fw-bold">City</span>: {data.city}</div>
                    <div className="my-2"><span className="fw-bold">State</span>: {data.state}</div>
                    <div className="my-2"><span className="fw-bold">Country</span>: {data.country}</div>
                    <div className="my-2"><span className="fw-bold">ZIP/postal code</span>: {data.zipCode}</div>
                    <div className="my-2"><span className="fw-bold">Timeline</span>: {timelineValues[data.timeline]}</div>
                    <div className="my-2"><span className="fw-bold">Creative briefing</span>: {data.creativeBriefing || " None"}</div>
                    <div className="my-2"><span className="fw-bold">Additional info</span>: {data.additionalInfo || " None"}</div>
                </div>
            </div>
        </>
    );
}
