// Generated from example data using json-ts

export interface IWorkflow {
  data: IDataItem[];
  status: number;
  statusText: string;
  headers: IHeaders;
  config: IConfig;
  request: IRequest;
}

export interface IDataItem {
  self: string;
  id: string;
  name: string;
  subtask: boolean;
  statuses: IStatusesItem[];
}

export interface IStatusesItem {
  self: string;
  description: string;
  iconUrl: string;
  name: string;
  id: string;
  statusCategory: IStatusCategory;
}

export interface IStatusCategory {
  self: string;
  id: number;
  key: string;
  colorName: string;
  name: string;
}

export interface IHeaders {
  'content-security-policy'?: string;
  'x-content-type-options'?: string;
  'x-asen'?: string;
  'x-arequestid'?: string;
  'x-frame-options'?: string;
  'content-type'?: string;
  'cache-control'?: string;
  'transfer-encoding'?: string;
  'x-seraph-loginreason'?: string;
  date?: string;
  'x-asessionid'?: string;
  'x-xss-protection'?: string;
  'x-ausername'?: string;
  expires?: string;
  Accept?: string;
  cookie?: string;
}

export interface IConfig {
  transformRequest: ITransformRequest;
  transformResponse: ITransformResponse;
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  headers: IHeaders;
  method: string;
  baseURL: string;
  url: string;
}

export interface ITransformRequest {
}

export interface ITransformResponse {
}

export interface IRequest {
}
