import { IMovieProps } from "../movie/movie.type";

type IBaseProps = IMovieProps;

interface IAuthHeader {
  headers: {
    Authorization: string;
  }
};

export {
  IBaseProps,
  IAuthHeader
};