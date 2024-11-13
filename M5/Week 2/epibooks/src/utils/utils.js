export const capitalize = (targetString) => {
  return (
    targetString.charAt(0).toUpperCase() +
    targetString.slice(1)
  );
};

export const allUpperCase = (targetString) => {
  return targetString.toUpperCase();
};
