import type { RustRequest, SaveRequest, Request } from "../types/Request";

export function generateQueryParameterTail(queryParameters: Array<Array<string>>): string {
  let queryTail: string = "?";

  for (let data of queryParameters) {
    queryTail += `${data[0]}=${data[1]}&`;
  }

  queryTail = queryTail.slice(0, -1);
  return queryTail;
}

export function nestedToRecord(headers: Array<Array<string>>): Record<string, string> {
  let newHeaders: Record<string, string> = {};

  for (let data of headers) {
    newHeaders[data[0]] = data[1];
  }
  return newHeaders;
}

export function generateRequestFormat(request: Request): RustRequest {
  return {
    body: request.body,
    bodyType: request.bodyType,
    headers: nestedToRecord(request.headers),
    url: request.url + generateQueryParameterTail(request.queryParameters),
    method: request.method,
  };
}

export function generateSaveFormat(request: Request): SaveRequest {
  let titleSplitted: Array<string> = request.url.split("/").filter((v: string) => v != "");
  let title: string = titleSplitted[titleSplitted.length - 1];

  if (title.length > 12) {
    title = `${title.substring(9)}...`;
  }

  return {
    name: title,
    key: request.url + request.method,
    url: request.url,
    method: request.method,
    body: request.body,
    bodyType: request.bodyType,
    headers: nestedToRecord(request.headers),
    queryParameters: nestedToRecord(request.queryParameters),
  };
}

export function byteFormatter(val: number): string {
  const units: Array<string> = ["B", "KB", "MB", "GB", "TB"];

  // calculation
  let index: number = 0,
    num: number = val;

  while (num >= 1024 && ++index) num /= 1024;

  return num.toFixed(num < 10 && index > 0 ? 1 : 0) + " " + units[index];
}
