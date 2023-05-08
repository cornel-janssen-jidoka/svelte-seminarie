<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

    $: fullThumbnailUrl = `http://localhost:3000${data.movie.thumbnailUrl}`
</script>

<section>
    <h1>Movie: {data.movie.title}</h1>

    <h2>Rating:</h2>
    <p>{data.movie.rating}/10</p>

    <h2>Description</h2>
    <p>{data.movie.description}</p>

    <h2>Thumbnail:</h2>
    <img src={fullThumbnailUrl} alt="thumbnail">

    <div>
        <a href="/">
            <button>
                Back
            </button>
        </a>
    </div>
</section>

<style lang="scss">
    section {
      padding: 0.5rem;
      box-shadow: 0px 5px 10px -5px rgb(0 0 0 / 30%);
      background-color: #FFFFFF;
    }

    img {
      max-height: 500px;
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
</style>