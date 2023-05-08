<section>
    {#each movies as movie}
        <MovieCard movie={movie}/>
    {/each}
</section>

<script lang="ts">
    import type {MovieSummary} from "../../models/MovieSummary";
    import MovieCard from "../MovieCard/MovieCard.svelte";

    export let movies: MovieSummary[];
</script>

<style>
    section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>