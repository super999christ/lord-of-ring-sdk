import { NetworkHelper } from "../../helpers";
import Base from "../base";
import { IMovieProps } from "./movie.type";

class Movie extends Base {
  constructor(options: IMovieProps) {
    super(options);
  }

  getQuote(id: string) {
    const url = `${this.baseUrl}/${id}/quote`;
    return NetworkHelper.fetchData(url, this.headers);
  }
};

export default Movie;