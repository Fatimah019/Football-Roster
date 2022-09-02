export const csvFileToArray = (item, setFileToArray) => {
  item = item.replaceAll('"', "");
  item = item.replaceAll("\r", "");

  const csvHeader = item.slice(0, item.indexOf("\n")).split(",");
  const csvRows = item.slice(item.indexOf("\n") + 1).split("\n");

  const arraydata = csvRows.map((i) => {
    const values = i.split(",");
    const obj = csvHeader.reduce((object, header, index) => {
      const imageItemsLength = values?.length - csvHeader?.length;

      if (header === "Player Image") {
        const imageItems = [values[1]];
        for (let position = 0; position < imageItemsLength; position++) {
          imageItems?.push(values[position + 2]);
        }
        object[header] = imageItems.join(",");
      } else if (index > 1) {
        object[header] = values[index + imageItemsLength];
      } else {
        object[header] = values[index];
      }
      return object;
    }, {});
    return obj;
  });

  setFileToArray(arraydata);
};
