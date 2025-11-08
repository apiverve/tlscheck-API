declare module '@apiverve/tlscheck' {
  export interface tlscheckOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface tlscheckResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class tlscheckWrapper {
    constructor(options: tlscheckOptions);

    execute(callback: (error: any, data: tlscheckResponse | null) => void): Promise<tlscheckResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: tlscheckResponse | null) => void): Promise<tlscheckResponse>;
    execute(query?: Record<string, any>): Promise<tlscheckResponse>;
  }
}
