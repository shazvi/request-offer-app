import Head from 'next/head'
import InputField from "../components/InputField";
import { useForm } from "react-hook-form";
import TextArea from "../components/TextArea";
import EstimateSection from "../components/EstimateSection";

export default function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const sendOfferRequest = async data => {
        console.log(data);
        alert("submitted");
        // todo
    };
    
    return (
        <div className="container-fluid">
            <Head>
                <title>Request Offer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="row">
                <div className="col-lg-8 p-5">
                    <div className="offset-md-2 col-md-8">
                        <h1 className="pb-3 fw-bold">Request Offer</h1>

                        <div className="from-btn pb-5">from <button className="btn rounded-pill shadow-sm" disabled={true}>😊 Zekisworld</button></div>

                        <form onSubmit={handleSubmit(sendOfferRequest)}>
                            <div className="row">
                                <InputField className="col" label="Full name" name="fullName" required={true} placeholder="John Doe" register={register} errors={errors} />
                                <InputField className="col" label="Email" name="email" type="email" required={true} placeholder="johndoe@company.com" register={register} errors={errors} />
                            </div>

                            <InputField label="Company" name="company" required={true} placeholder="Coca-Cola" register={register} errors={errors} />

                            <TextArea label="Company address" name="companyAddress" required={true} placeholder="Cola street 100" register={register} errors={errors} />

                            <div className="row">
                                <InputField className="col" label="City" name="city" required={true} placeholder="New York" register={register} errors={errors} />
                                <InputField className="col" label="State/Province" name="state" required={true} placeholder="johndoe@company.com" register={register} errors={errors} />
                            </div>

                            <div className="row">
                                <InputField className="col" label="Country" name="country" required={true} placeholder="New York" register={register} errors={errors} />
                                <InputField className="col" label="ZIP/postal code" name="zipCode" type="number" required={true} placeholder="110022" register={register} errors={errors} />
                            </div>

                            <div className="form-group py-3">
                                <label htmlFor="timeline">Timeline</label>
                                <select className="form-control" id="timeline" defaultValue={0} {...register("timeline", { validate: val => val > 0 } )}>
                                    <option hidden disabled value={0}>Select timeline</option>
                                    <option value="1">⚠️ Going live as soon as possible</option>
                                    <option value="2">🗓 Going live in the near future calendar emoji</option>
                                    <option value="3">🤔 No specific plans</option>
                                </select>
                                {errors.timeline && <span className="error-text">This field is required</span>}
                            </div>

                            {/* Copied the TextArea component for now because this has additional tooltip interaction */}
                            <div className="form-group py-3">
                                <label htmlFor="creativeBriefing">Creative briefing (optional) <span title="Keep it short! Briefings that are longer than 1 page usually just don't get read.">💡</span></label>
                                <textarea className="form-control" id="creativeBriefing" placeholder="Attach/upload your briefing or write it here" {...register("creativeBriefing")} />
                            </div>

                            <TextArea label="Additional info (optional)" name="additionalInfo" placeholder="Any other infos or comments?" register={register} errors={errors} />

                            {Object.keys(errors).length === 0 ?
                                <button className="btn w-100 mt-5 submit-btn" type="submit">Send Offer Request</button> :
                                <button className="btn w-100 mt-5 submit-btn-disabled" type="submit">Send Offer Request</button>
                            }
                        </form>
                    </div>
                </div>
                
                <div className="col-lg-4 py-5 price-estimate-col">
                    <EstimateSection />
                </div>
            </main>
        </div>
    )
}
