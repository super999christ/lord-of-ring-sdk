import Base from "../base";
import { IListResponse } from "../base/base.type";
import { IMovie, IMovieProps, IMovieQuote } from "./movie.type";
declare class Movie extends Base {
    constructor(options: IMovieProps);
    getOne(id: string): Promise<IMovie>;
    getAll(): Promise<IListResponse<IMovie>>;
    getQuote(id: string): Promise<IListResponse<IMovieQuote>>;
}
export default Movie;
