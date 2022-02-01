export default function InputField({label, className = "", name, type = "text", required= false, placeholder, register, errors}) {
    // Append any additional classNames to default className
    className = `form-group py-3 ${className}`;
    
    // Validate using regex pattern, only for email field (others fields will simply have "required" validation)
    let pattern = null;
    if (type === "email") {
        pattern = {
            value: /\S+@\S+\.\S+/,
            message: "Please enter a valid email address"
        };
    }
    
    // If there is an error message, show it. Or else, show default message (this is needed because "required" validation returns empty message even if validation fails)
    let errorMessage = errors[name]?.message?.length > 0 ?
        errors[name]?.message :
        "This field is required";

    return (
        <div className={className}>
            <label htmlFor={name} className="fw-bold">{label}</label>
            <input className="form-control" id={name} {...register(name, { required: required, pattern: pattern } ) } {...{type, placeholder}} />
            {errors[name] && <span className="error-text">{errorMessage}</span>}
        </div>
    );
}
