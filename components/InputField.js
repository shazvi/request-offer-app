export default function InputField({label, className = "", name, type = "text", required= false, placeholder, register, errors}) {
    className = `form-group py-3 ${className}`;
    
    let pattern = null;
    if (type === "email") {
        pattern = {
            value: /\S+@\S+\.\S+/,
            message: "Please enter a valid email address"
        };
    }
    let errorMessage = errors[name]?.message?.length > 0 ?
        errors[name]?.message :
        "This field is required";

    return (
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <input className="form-control" id={name} {...register(name, { required: required, pattern: pattern } ) } {...{type, placeholder}} />
            {errors[name] && <span className="error-text">{errorMessage}</span>}
        </div>
    );
}
