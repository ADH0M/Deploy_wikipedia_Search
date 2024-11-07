// The reusable Input component
import'./inputsStyle.css'
const ReusableInput = ({
  value,
  onChange,
  type = "text", // Default type is 'text'
  placeholder = "",
  label = "",
  name,
  required = false,
  ...rest // This will allow passing additional props
}) => {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        {...rest} // Spread additional props to the input element
      />
    </div>
  );
};

export default ReusableInput;

