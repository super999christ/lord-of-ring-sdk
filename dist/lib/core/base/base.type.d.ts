interface IBaseProps {
    path: string;
    accessToken: string;
}
interface IAuthHeader {
    headers: {
        Authorization: string;
    };
}
interface IListResponse<T> {
    docs: T[];
    limit: number;
    offset: number;
    page: number;
    pages: number;
    total: number;
}
export { IBaseProps, IAuthHeader, IListResponse };
