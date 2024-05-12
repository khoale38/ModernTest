function arrayToHashMap(arr) {
  const map = {};
  arr.forEach((item) => {
    if (map[item]) {
      map[item] += 1;
    } else {
      map[item] = 1;
    }
  });
  return map;
}

function findDifferingKeys(tagA, tagB) {
  const hashMapA = arrayToHashMap(tagA);
  const hashMapB = arrayToHashMap(tagB);
  const differingKeys = [];
  const allKeys = new Set([...Object.keys(hashMapA), ...Object.keys(hashMapB)]);
  allKeys.forEach((key) => {
    if (hashMapA[key] !== hashMapB[key]) {
      differingKeys.push(key);
    }
  });

  return differingKeys;
}

const tagA = ["A", "C", "D", "D", "C", "A", "B", "F"];
const tagB = ["E", "C", "D", "D", "H", "A", "B", "F"];
console.log(findDifferingKeys(tagA, tagB));
