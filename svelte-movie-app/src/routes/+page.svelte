<script lang="ts">
    import MovieCardGrid from "../components/MovieCardGrid/MovieCardGrid.svelte";
    import type {MovieSummary} from "../models/MovieSummary";
    import {movieStore} from "../stores/movies";

    // Example with manual subscribe
    /* export let movies: MovieSummary[] = [];
    const unsubscribe = movieStore.subscribe(v => {
        movies = v;
    })

    onDestroy(unsubscribe);*/
</script>

<h1>Popular movies</h1>

<MovieCardGrid movies={$movieStore}/>