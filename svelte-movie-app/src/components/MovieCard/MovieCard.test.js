import {render, fireEvent} from '@testing-library/svelte'
import MovieCard from './MovieCard.svelte'
import {movieStore} from "../../stores/movies";

const movie = {
    id: '1',
    title: 'Test title',
    description: 'Test description',
    rating: 7,
    thumbnailUrl: 'some/url',
    favourite: false,
}

describe('MovieCard', () => {
    describe('rendering', () => {
        it('should show movie properties', () => {
            const {getByRole, getByText} = render(MovieCard, {props: {movie}})

            const title = getByRole('heading', {level: 3});
            const description = getByText(movie.description);

            expect(title).toBeInTheDocument();
            expect(title).toHaveTextContent(movie.title);

            expect(description).toBeInTheDocument();
            expect(description).toHaveTextContent(movie.description);
        });
    });

    describe('on click favourte', () => {

        beforeEach(() => {
            movieStore.set([movie])
        });

        it('should mark the movie as favourite in the movies store', async() => {
            const {getByRole} = render(MovieCard, {props: {movie}})

            const icon = getByRole('button', {
                name: /favourite/i
            });
            await fireEvent.click(icon)

            await new Promise(done => {
                movieStore.subscribe(v => {
                    expect(v).toEqual([{
                        ...movie,
                        favourite: true
                    }]);
                    done()
                })
            });
        });
    });
});
