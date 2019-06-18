export interface IIssues {
    data: IData;
    status: number;
    statusText: string;
    headers: IHeaders;
    config: IConfig;
    request: IRequest;
}

export interface IData {
    expand: string;
    startAt: number;
    maxResults: number;
    total: number;
    issues: IIssuesItem[];
}

export interface IIssuesItem {
    expand: string;
    id: string;
    self: string;
    key: string;
    fields: IFields;
    changelog: IChangelog;
}

export interface IFields {
    issuetype: IIssuetype;
    resolutiondate: null | string;
    created: string;
}

export interface IIssuetype {
    self: string;
    id: string;
    description: string;
    iconUrl: string;
    name: string;
    subtask: boolean;
    avatarId: number;
}

export interface IChangelog {
    startAt: number;
    maxResults: number;
    total: number;
    histories: IHistoriesItem[];
}

export interface IHistoriesItem {
    id: string;
    author: IAuthor;
    created: string;
    items: IItemsItem[];
}

export interface IAuthor {
    self: string;
    name: string;
    key: string;
    emailAddress: string;
    avatarUrls: IAvatarUrls;
    displayName: string;
    active: boolean;
    timeZone: string;
}

export interface IAvatarUrls {
    '48x48': string;
    '24x24': string;
    '16x16': string;
    '32x32': string;
}

export interface IItemsItem {
    field: string;
    fieldtype: string;
    from: null | string;
    fromString: null | string;
    to: string | null;
    toString: string | null;
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
