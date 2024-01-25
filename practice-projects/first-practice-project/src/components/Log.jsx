export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={turn.square.row + "" + turn.square.col}>
          <p>
            {turn.player} clicked on row {turn.square.row + 1}, column{" "}
            {turn.square.col + 1}
          </p>
        </li>
      ))}
    </ol>
  );
}
