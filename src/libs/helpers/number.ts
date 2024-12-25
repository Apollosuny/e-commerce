export const formatNumberWithCustomSeparators = (
  number: number,
  separator: string = ','
): string => {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return parts.join('.');
};
