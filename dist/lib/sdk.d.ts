import { Movie } from "./core";
interface ILordSDKProps {
    accessToken: string;
    version?: string;
}
declare class LordSDK {
    private movie;
    constructor(options: ILordSDKProps);
    getMovieInstance(): Movie;
}
export default LordSDK;
