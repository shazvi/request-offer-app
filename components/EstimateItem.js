export default function EstimateItem({description, unitPrice, qty, total}) {
    return (
        <div className="row py-2">
            <div className="col-8">
                <div className="item-desc">{description}</div>
                <div className="fw-bold">{unitPrice} x {qty}</div>
            </div>
            <div className="col-4 text-end text-nowrap fw-bold">{total}</div>
        </div>
    );
}
