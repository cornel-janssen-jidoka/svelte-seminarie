import {getMovie} from "../../../api/movie/movie";
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    const movie = await getMovie(params.movieId);

    return {
        movie
    };
}) satisfies PageLoad;