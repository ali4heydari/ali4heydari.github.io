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

export type WithStatus<TResponseBody> = {
  data: TResponseBody;
  status: number;
};

export const getJson = async <TResponseBody = any>(
  url: string,
  options?: RequestInit,
): Promise<WithStatus<TResponseBody>> =>
  fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json().then<WithStatus<TResponseBody>>((data) => ({
      data,
      status: response.status,
    }));
  });
