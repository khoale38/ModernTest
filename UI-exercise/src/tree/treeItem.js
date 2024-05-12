import React, { useState, useEffect, useRef } from "react";

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

export default TreeItem;
