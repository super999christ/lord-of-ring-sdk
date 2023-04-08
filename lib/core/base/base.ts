import { BASE_URL, VERSION } from "../../env/data";
import { NetworkHelper } from "../../helpers";
import { IAuthHeader, IBaseProps, IListResponse } from "./base.type";

class Base {
  protected baseUrl: string;        // API's base url (e.g. https://the-one-api.dev/v2/movie)
  protected accessToken: string;    // authentication token attached to HTTPS header
  protected headers: IAuthHeader;   // HTTPS header
  
  constructor(options: IBaseProps) {
    const { path, accessToken } = options;
    this.baseUrl = `${BASE_URL}/${VERSION}${path}`;
    this.accessToken = accessToken;
    this.headers = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    };
  }

  protected async _getResponse<T>(url: string): Promise<IListResponse<T>> {
    try {
      const response = await NetworkHelper.fetchData(url, this.headers);
      const responseData = response.data as IListResponse<T>;
      return responseData;
    } catch(error) {
      throw error;
    }
  };

  protected async _getOne<T>(id: string): Promise<T> {
    const url = `${this.baseUrl}/${id}`;
    try {
      const responseData = await this._getResponse<T>(url);
      return responseData.docs[0];
    } catch(error) {
      throw error;
    }
  }

  protected async _getAll<T>(): Promise<IListResponse<T>> {
    const url = this.baseUrl;
    return this._getResponse<T>(url);
  }
};

export default Base;