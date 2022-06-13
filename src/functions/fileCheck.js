export const checkForInvalidInput = (data, valueToCheck) => {
  return data?.some((file) => Object.values(file).includes(valueToCheck));
};
