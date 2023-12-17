export function enumToValueArray($enum: any): string[] {
  const result: string[] = [];
  for (const i in $enum) {
    result.push($enum[i]);
  }
  return result;
}

export const isValidDate = (date: string | number) =>
  Object.prototype.toString.call(date) === "[object Date]" &&
  !Number.isNaN(date);

export interface WithStatus<TResponseBody> {
  data: TResponseBody;
  status: number;
}

export const getJson = async <TResponseBody = any>(
  url: string,
  options?: RequestInit,
): Promise<WithStatus<TResponseBody>> =>
  fetch(url, options).then(async (response) => {
    const data = await response.json();
    const result: WithStatus<TResponseBody> = {
      data,
      status: response.status,
    };
    return result;
  });
