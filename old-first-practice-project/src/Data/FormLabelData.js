const inputFormLabels = [
  { id: "current-savings", type: "number", label: "Current Savings ($)" },
  { id: "yearly-contribution", type: "number", label: "Yearly Savings ($)" },
  {
    id: "expected-return",
    type: "number",
    label: "Expected Interest (%, per year)",
  },
  { id: "duration", type: "number", label: "Investment Duration (years)" },
];

const buttonLabels = { reset: "Reset", submit: "Calculate" };

export { inputFormLabels, buttonLabels };
