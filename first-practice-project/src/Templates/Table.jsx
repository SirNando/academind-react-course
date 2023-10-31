const Table = (props) => {
  const tableFields = props.tableFieldsData;
  const tableData = props.tableData;

  if(props.tableData.length === 0) {
    return(<h1>Nothing to see here.</h1>)
  }

  return (
    <table className="result">
      <thead>
        <tr>
          {tableFields.head.map((headerElement, key) => {
            return <th key={key}>{headerElement}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {tableData.map((entry, key) => {
          return (
            <tr key={key}>
              <td>{entry["year"]}</td>
              <td>{entry.yearlyInterest + entry.savingsEndOfYear}</td>
              <td>{entry.yearlyInterest}</td>
              <td>{entry.savingsEndOfYear}</td>
              <td>{entry.yearlyContribution}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
