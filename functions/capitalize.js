const capitalize = (string) => {
  return string.length > 0 ? string[0].toUpperCase() + string.substring(1) : "";
};

export default capitalize;
