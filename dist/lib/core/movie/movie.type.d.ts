import { IBaseProps } from "../base/base.type";
type IMovieProps = IBaseProps;
interface IMovie {
    _id: string;
    name: string;
    academyAwardWins: number;
    academyAwardNominations: number;
    boxOfficeRevenueInMillions: number;
    budgetInMillions: number;
    rottenTomatoesScore: number;
    runtimeInMinutes: number;
}
interface IMovieQuote {
    _id: string;
    id: string;
    movie: string;
    dialog: string;
    character: string;
}
export { IMovieProps, IMovie, IMovieQuote };
