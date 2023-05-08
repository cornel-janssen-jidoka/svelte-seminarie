<script lang="ts">
    import type {MovieSummary} from "../../models/MovieSummary";
    import {movieStore} from "../../stores/movies";

    export let movie: MovieSummary;

    $: fullThumbnailUrl = `http://localhost:3000${movie.thumbnailUrl}`

    function toggleFavourite(): void {
        movieStore.update(v => {
            return v.map(m => {
                if (m.title === movie.title) {
                    return {
                        ...m,
                        favourite: !m.favourite
                    };
                }
                return m;
            });
        })
    }
</script>

<article>
    <div class="top">
        <span>{movie.rating}/10</span>
        <i aria-label="favourite" role="button" class="fa-solid fa-star" class:favourite={movie.favourite} on:click={toggleFavourite}></i>
    </div>
    <h3>{movie.title}</h3>

    <p>{movie.description}</p>

    <section class="thumbnail">
        <img src={fullThumbnailUrl} alt={movie.title}>
    </section>

    <section class="actions">
        <a href="/movies/{movie.id}">
            <button>Detail</button>
        </a>
    </section>
</article>

<style>
    article {
        min-width: 350px;
        max-width: 350px;
        min-height: 400px;
        max-height: 400px;
        margin: 0.5rem;
        box-shadow: 0px 5px 10px -5px rgb(0 0 0 / 30%);
        background-color: #FFFFFF;
    }

    h3 {
        padding: 0 1rem;
    }

    section.thumbnail {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }

    img {
        max-width: 200px;
        max-height: 200px;
    }

    button {
        border-radius: 40px;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 500;
        padding: 6px 20px;
        border: none;
        cursor: pointer;
        background: #4DA7D1;
        color: #FFFFFF;
        transition: 0.5s ease-in-out;
    }

    section.actions {
        display: flex;
        justify-content: center;
    }

    i {
        color: grey;
    }

    .favourite {
        color: #e8e800;
    }

    .top {
        padding: 0.5rem 1rem;
        display: flex;
        justify-content: space-between;
    }

    p {
        padding: 0 1rem;
    }
</style>