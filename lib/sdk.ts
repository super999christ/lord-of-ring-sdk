import { Movie } from "./core";

interface ILordSDKProps {
  accessToken: string;
};

class LordSDK {
  private movie: Movie;
  constructor(options: ILordSDKProps) {
    const { accessToken } = options;
  }

  getMovie() {
    return this.movie;
  }
};

export default LordSDK;