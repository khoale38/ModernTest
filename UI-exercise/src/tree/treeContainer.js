import { useState } from "react";
import TreeItem from "./treeItem";

function TreeContainer({ initialData }) {
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

export default TreeContainer;
