const Input = (props) => {
  return (
    <p>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.changeHandler}
      />
    </p>
  );
};

export default Input;
