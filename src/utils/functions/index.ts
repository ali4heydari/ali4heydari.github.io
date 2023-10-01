export function enumToValueArray($enum: any): string[] {
  const result: string[] = [];
  for (let i in $enum) {
    result.push($enum[i]);
  }
  return result;
}

export const isValidDate = (date: string | number) =>
  Object.prototype.toString.call(date) === "[object Date]" &&
  !Number.isNaN(date);
