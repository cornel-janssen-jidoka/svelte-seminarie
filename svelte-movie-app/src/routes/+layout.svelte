<Navigation/>

<section>
    <slot></slot>
</section>

<script>
    import Navigation from "../components/Navigation/Navigation.svelte";
    import {onMount} from "svelte";
    import {getMovies} from "../api/movie/movie";
    import {movieStore} from "../stores/movies";

    onMount(async () => {
        const movies = await getMovies();

        movieStore.set(movies);
    });
</script>

<style>
    :global(body, html) {
        margin: 0;
        padding: 0;
        height: 100%;
        background: #F8F8F8;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }

    section {
        padding: 1rem;
    }
</style>