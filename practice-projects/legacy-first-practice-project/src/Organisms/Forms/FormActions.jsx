export default function FormActions(props) {
  return (
    <p className="actions">
      <button type="reset" className="buttonAlt">
        {props.reset}
      </button>
      <button type="submit" className="button">
        {props.submit}
      </button>
    </p>
  );
}
