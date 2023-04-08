import { Movie } from "./core";

interface ILordSDKProps {
  accessToken: string;
  version?: string;
};

class LordSDK {
  private movie: Movie;
  constructor(options: ILordSDKProps) {
    const { accessToken } = options;
    this.movie = new Movie({ path: '/movie', accessToken });
  }

  getMovie() {
    return this.movie;
  }
};

export default LordSDK;