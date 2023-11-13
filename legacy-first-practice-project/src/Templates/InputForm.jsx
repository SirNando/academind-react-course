import Input from "../Organisms/Forms/Input";
import InputGroup from "../Organisms/Forms/InputGroup";
import FormActions from "../Organisms/Forms/FormActions";
import { useState } from "react";

export default function InputForm(props) {
  const labelData = props.labelData;
  const buttonLabels = props.buttonLabels;

  const formDataObject = labelData.reduce((acc, label) => {
    acc[label.id] = "";
    return acc;
  }, {});
  const [formData, setFormData] = useState(formDataObject);

  function inputChangeHandler(event) {
    const { id, value } = event.target;

    setFormData({ ...formData, [id]: value });
  }

  function submitHandler(event) {
    event.preventDefault();
    props.insertData(formData);
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      {labelData.map((label, key) => {
        if (key % 2 === 0) {
          // Create a new InputGroup component for every even index
          return (
            <InputGroup key={key}>
              <Input
                id={label.id}
                type={label.type}
                key={label.id}
                changeHandler={inputChangeHandler}
              >
                {label.label}
              </Input>
              {key + 1 < labelData.length && (
                <Input
                  id={labelData[key + 1].id}
                  type={labelData[key + 1].type}
                  key={labelData[key + 1].id}
                  changeHandler={inputChangeHandler}
                >
                  {labelData[key + 1].label}
                </Input>
              )}
            </InputGroup>
          );
        } else {
          return null;
        }
      })}
      <FormActions
        reset={buttonLabels.reset}
        submit={buttonLabels.submit}
      ></FormActions>
    </form>
  );
}
