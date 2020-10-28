export const capitalize = (value: string | null) => {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : null;
}