import TreeContainer from "./tree/treeContainer";

const initialData = [
  {
    label: "Country 1",
    check: 0,
    items: [
      {
        label: "State 1.1",
        check: 0,
        items: [{ label: "State 1.2.1", check: 0 }],
      },
      {
        label: "State 1.2",
        check: 0,
        items: [
          { label: "State 1.2.1", check: 0 },
          { label: "State 1.2.2", check: 0 },
        ],
      },
    ],
  },
  {
    label: "Country 2",
    check: -1,
    items: [
      { label: "State 2.1", check: 0 },
      { label: "State 2.2", check: 1 },
    ],
  },
  {
    label: "Country 3",
    check: 1,
    items: [
      { label: "State 3.1", check: 1 },
      { label: "State 3.2", check: 1 },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <h1>Checkbox Tree</h1>
      <TreeContainer initialData={initialData} />
    </div>
  );
}

export default App;
