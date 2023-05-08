import axios from 'axios';
import type {AxiosResponse} from 'axios';
import type {MovieSummary} from '../../models/MovieSummary';

const baseApi = 'http://localhost:3000';

export async function getMovies(): Promise<MovieSummary[]> {
    const response = await axios.get<MovieSummary[], AxiosResponse<MovieSummary[]>>(`${baseApi}/movies`);
    return response.data;
}

export async function getMovie(movieId: string): Promise<MovieSummary> {
    const response = await axios.get<MovieSummary, AxiosResponse<MovieSummary>>(`${baseApi}/movies/${movieId}`);
    return response.data;
}
