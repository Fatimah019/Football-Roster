export const checkForInvalidInput = (data, valueToCheck) => {
  return data?.some((file) => Object.values(file).includes(valueToCheck));
};

export const checkForDuplicateData = (data = []) => {
  const map = new Map();
  let newData;
  for (const obj of data) {
    if (map.has(obj["Player Name"])) {
      map.set(obj["Player Name"], obj);
    } else {
      map.set(obj["Player Name"], {
        ...map.get(obj["Player Name"]),
        ...obj,
      });
    }
  }
  newData = [...map.values()];
  return newData;
};
