import { IAuthHeader, IBaseProps, IListResponse } from "./base.type";
declare class Base {
    protected baseUrl: string;
    protected accessToken: string;
    protected headers: IAuthHeader;
    constructor(options: IBaseProps);
    protected _getResponse<T>(url: string): Promise<IListResponse<T>>;
    protected _getOne<T>(id: string): Promise<T>;
    protected _getAll<T>(): Promise<IListResponse<T>>;
}
export default Base;
