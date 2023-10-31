const Table = (props) => {
  const tableFields = props.tableFieldsData;

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
        <tr>
          {tableFields.body.map((bodyElement, key) => {
            return <td key={key}>{bodyElement}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
