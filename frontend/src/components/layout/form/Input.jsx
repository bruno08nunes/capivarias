import style from "./Input.module.css";

const Input = ({label, className, ...props}) => {
  return (
    <div className={style.div}>
        {label && <label htmlFor={props.id} className={style.label}>{label}</label>}
        <input className={style.input + " " + className} {...props} />
    </div>
  )
}

export default Input