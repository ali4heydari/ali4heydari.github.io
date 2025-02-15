export function enumToValueArray($enum: Iterable<unknown>): string[] {
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
  data: TResponseBody | Record<string, never>;
  status: number;
}

const emptyBodyStatusCodes = [101, 204, 205, 304];

export const getJson = async <TResponseBody = any>(
  url: string,
  options?: RequestInit,
): Promise<WithStatus<TResponseBody>> =>
  fetch(url, options).then(async (response) => {
    if (emptyBodyStatusCodes.includes(response.status))
      return {
        data: {},
        status: response.status,
      };

    const data = await response.json();
    const result: WithStatus<TResponseBody> = {
      data,
      status: response.status,
    };
    return result;
  });
