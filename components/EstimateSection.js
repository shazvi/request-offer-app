import EstimateItem from "./EstimateItem";

export default function EstimateSection() {
    return (
        <>
            <div className="card mx-3 py-3 px-4 estimate-box shadow-sm col-xxl-10">
                <EstimateItem description="Instagram Feed Post (Video)" unitPrice="$7,500" qty="1" total="$ 7,500" />
                <EstimateItem description="Instagram Feed Post (Picture)" unitPrice="$6,000" qty="2" total="$ 12,000" />

                <hr/>

                <div className="row">
                    <div className="col-8 price-estimate">Price estimate</div>
                    <div className="col-4 text-end text-nowrap fw-bold fs-4">$ 19,500</div>
                </div>
            </div>

            <div className="card mt-4 mx-3 py-3 px-4 estimate-disclaimer shadow-sm col-xxl-10 fw-bold">
                🛈 Requesting an offer is free and does NOT legally bind you to accept or pay anything.
            </div>
        </>
    );
}
