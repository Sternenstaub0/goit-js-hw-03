function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  if (newArray > maxLength) {
    return newArray.slice(0, maxLength);
  } else {
    return newArray;
  }
}
