import Base from "../base";
import { IListResponse } from "../base/base.type";
import { IMovie, IMovieProps, IMovieQuote } from "./movie.type";

class Movie extends Base {
  constructor(options: IMovieProps) {
    super(options);
  }

  getOne(id: string): Promise<IMovie> {
    return super._getOne<IMovie>(id);
  }

  getAll(): Promise<IListResponse<IMovie>> {
    return super._getAll<IMovie>();
  }

  async getQuotes(id: string): Promise<IListResponse<IMovieQuote>> {
    const url = `${this.baseUrl}/${id}/quote`;
    try {
      const responseData = await super._getResponse<IMovieQuote>(url);
      return responseData;
    } catch(error) {
      throw error;
    }
  }
};

export default Movie;