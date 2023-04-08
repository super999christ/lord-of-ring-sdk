import { BASE_URL, VERSION } from "../../env/data";
import { NetworkHelper } from "../../helpers";
import { IAuthHeader, IBaseProps } from "./base.type";

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
        Authorization: accessToken
      }
    };
  }

  getOne(id: string) {
    const url = `${this.baseUrl}/${id}`;
    return NetworkHelper.fetchData(url, this.headers);
  }

  getAll() {
    const url = this.baseUrl;
    return NetworkHelper.fetchData(url, this.headers);
  }
};

export default Base;