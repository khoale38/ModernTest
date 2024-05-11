import React, { useState, useEffect, useRef } from "react";

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
  // {
  //   label: "Country 3",
  //   check: 1,
  //   items: [
  //     { label: "State 3.1", check: 1 },
  //     { label: "State 3.2", check: 1 },
  //   ],
  // },
];

function TreeItem({ item, onCheckChange }) {
  const indeterminate = item.check === -1;
  const cRef = useRef();

  useEffect(() => {
    cRef.current.indeterminate = indeterminate;
  }, [cRef, indeterminate]);

  const [checkState, setCheckState] = useState(item.check);

  useEffect(() => {
    setCheckState(item.check);
  }, [item.check]);

  const handleCheck = (e) => {
    let newCheckState = e.target.checked ? 1 : 0;
    if (indeterminate) newCheckState = 0;

    setCheckState(newCheckState);
    onCheckChange(item, newCheckState);
  };

  return (
    <li>
      <input
        ref={cRef}
        type="checkbox"
        checked={checkState === 1}
        onChange={handleCheck}
      />
      {item.label}
      {item.items && (
        <ul>
          {item.items.map((child, index) => (
            <TreeItem key={index} item={child} onCheckChange={onCheckChange} />
          ))}
        </ul>
      )}
    </li>
  );
}

function TreeContainer() {
  const [data, setData] = useState(initialData);

  const updateParentCheck = (item, data) => {
    const findParent = (child, tree) => {
      let result = null;
      tree.forEach((current) => {
        if (current.items && current.items.includes(child)) {
          result = current;
        } else if (current.items) {
          const found = findParent(child, current.items);
          if (found) result = found;
        }
      });
      return result;
    };

    let parent = findParent(item, data);

    while (parent) {
      const allChecked = parent.items.every((i) => i.check === 1);
      const allUnchecked = parent.items.every((i) => i.check === 0);

      if (allChecked) {
        parent.check = 1;
      } else if (allUnchecked) {
        parent.check = 0;
      } else {
        parent.check = -1;
      }

      parent = findParent(parent, data);
    }
  };

  const updateChildrenCheck = (item, checkState) => {
    item.check = checkState;
    if (item.items) {
      item.items.forEach((child) => updateChildrenCheck(child, checkState));
    }
  };

  const updateItemCheck = (item, check) => {
    updateChildrenCheck(item, check);
    updateParentCheck(item, data);
    setData([...data]);
  };

  return (
    <ul>
      {data.map((item, index) => (
        <TreeItem key={index} item={item} onCheckChange={updateItemCheck} />
      ))}
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Checkbox Tree</h1>
      <TreeContainer />
    </div>
  );
}

export default App;
