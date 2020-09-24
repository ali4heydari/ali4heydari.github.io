export function enumToValueArray($enum: any): string[] {
  const result: string[] = [];
  for (let i in $enum) {
    result.push($enum[i]);
  }
  return result;
}
