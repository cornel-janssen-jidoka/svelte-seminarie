<script lang="ts">
    import {goto} from '$app/navigation';
    import {movieStore} from "../../../stores/movies";
    import {createForm} from "svelte-forms-lib";
    import * as yup from "yup";
    import {setLocale} from "yup";

    setLocale({
        mixed: {
            required: 'Field is required',
        },
        number: {
            min: 'Value needs to be above ${min}',
            max: 'Value needs to be below ${max}',
        },
    });

    const {form, errors, state, handleChange, handleSubmit} = createForm({
        initialValues: {
            title: "Default Title",
        },
        validationSchema: yup.object().shape({
            title: yup
                .string()
                .required(),
            description: yup
                .string()
                .required(),
            rating: yup.number()
                .transform(value => Number.isNaN(value) ? undefined : value )
                .required()
                .min(1)
                .max(10),
        }),
        onSubmit: values => {
            console.log(values);
            movieStore.update(v => [...v, {...values}]);
            goto('/');
        }
    });
</script>

<h1>New Movie</h1>

<form on:submit={handleSubmit}>
    <div>
        <div>
            <label>Title</label>
            <input
                    id="title"
                    name="title"
                    on:change={handleChange}
                    on:blur={handleChange}
                    bind:value={$form.title}
            />
            {#if $errors.title}
                <small>{$errors.title}</small>
            {/if}
        </div>

        <div>
            <label>Description</label>
            <input
                    id="description"
                    name="description"
                    on:change={handleChange}
                    on:blur={handleChange}
                    bind:value={$form.description}
            />
            {#if $errors.description}
                <small>{$errors.description}</small>
            {/if}
        </div>

        <div>
            <label>Rating</label>
            <input
                    id="rating"
                    name="rating"
                    type="number"
                    on:change={handleChange}
                    on:blur={handleChange}
                    bind:value={$form.rating}
            />
            {#if $errors.rating}
                <small>{$errors.rating}</small>
            {/if}
        </div>
    </div>

<!--    <div>-->
<!--        <label>Description</label>-->
<!--        <input type="text" bind:value={formData.description}/>-->
<!--    </div>-->

<!--    <div>-->
<!--        <label>Rating</label>-->
<!--        <input type="number" max="10" min="1" bind:value={formData.rating}/>-->
<!--    </div>-->

    <button type="submit">Add</button>
</form>

<style lang="scss">
  button {
    margin-top: 1rem;
  }
</style>