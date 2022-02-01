import Head from 'next/head'
import {GetAllRequestIds, GetRequestById} from "../../libs/requests";

// Data is passed from `getStaticProps` function
export default function Id({ data }) {
    // Map timeline integer values to their corresponding texts
    const timelineValues = {
        1: "⚠️ Going live as soon as possible",
        2: "🗓 Going live in the near future calendar emoji",
        3: "🤔 No specific plans",
    };
    
    return (
        <div className="container">
            <Head>
                <title>Request Details</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
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
    );
}

// This function gets called on the server side at build time
export async function getStaticPaths() {
    // Get all request ids to pre-render at build time
    let Ids = await GetAllRequestIds();
    const paths = Ids.map(Id => ({
        params: {id: Id.toString()}
    }));

    // { fallback: false } means other routes should 404
    return { paths, fallback: false }
}

// This function gets called on the server side at build time
export async function getStaticProps({params}) {
    // params contains `id` from above function
    let request = await GetRequestById(params.id);
    request._id = request._id.toString();
    
    // Pass data to the page via props
    return { props : { data: request }}
}
