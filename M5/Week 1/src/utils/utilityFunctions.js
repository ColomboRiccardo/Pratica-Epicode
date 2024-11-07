export function truncateText(description) {
  if (description.length < 140) {
    return description;
  }
  return description.slice(0, 140).trim() + "... ";
}

export function capitalizeFirstLetter(val) {
  return (
    String(val).charAt(0).toUpperCase() +
    String(val).slice(1)
  );
}
