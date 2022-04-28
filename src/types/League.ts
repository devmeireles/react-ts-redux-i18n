import { IDefault } from "./Default";

export interface ILeague extends IDefault {
    name: string;
    slug: string;
    image: string;
    country: string;
    clubs: number;
    players: number;
    type?: 'CUP' | 'CHAMPIONSHIP'
}