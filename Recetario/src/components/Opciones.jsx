import './Opciones.css'

export function Opciones({ label, options, onChange, value, id }) {
  return (
    <div className="labeled-select">
      <label htmlFor={id} >{label}</label>
      <select onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}