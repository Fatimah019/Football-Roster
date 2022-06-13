export const checkForInvalidInput = (data, valueToCheck) => {
  return (
    data
      // ?.slice(0, -1)
      ?.some((file) => Object.values(file).includes(valueToCheck))
  );
};
