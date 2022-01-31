export default function TextArea({label, name, required = false, placeholder, register, errors}) {
    return (
        <div className="form-group py-3">
            <label htmlFor={name}>{label}</label>
            <textarea className="form-control" id={name} placeholder={placeholder} {...register(name, {required: required})} />
            {errors[name] && <span className="error-text">This field is required</span>}
        </div>
    );
}
