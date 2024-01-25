import "./App.css";
import logo from "./assets/investment-calculator-logo.png";
import InputForm from "./Templates/InputForm";
import Table from "./Templates/Table";
import { tableFieldsData } from "./Data/TableData";
import { useState } from "react";
import { buttonLabels, inputFormLabels } from "./Data/FormLabelData";

function App() {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    return yearlyData;
  };

  const [tableData, setTableData] = useState([]);
  function tableChangeHandler(event) {
    const data = calculateHandler(event);
    setTableData([...tableData, ...data]);
  }

  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <InputForm
        labelData={inputFormLabels}
        buttonLabels={buttonLabels}
        insertData={tableChangeHandler}
      />
      <Table tableFieldsData={tableFieldsData} tableData={tableData}></Table>
    </>
  );
}

export default App;
