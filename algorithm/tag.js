const tagA = ["A", "C", "D", "D", "C", "A", "B", "F"];

const tagB = ["E", "C", "D", "D", "H", "A", "B", "F"];

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

const hashMapA = arrayToHashMap(tagA);
const hashMapB = arrayToHashMap(tagB);

function findDifferingKeys(map1, map2) {
  const differingKeys = [];
  const allKeys = new Set([...Object.keys(map1), ...Object.keys(map2)]);
  allKeys.forEach((key) => {
    if (map1[key] !== map2[key]) {
      differingKeys.push(key);
    }
  });

  return differingKeys;
}

console.log(findDifferingKeys(hashMapA, hashMapB));
