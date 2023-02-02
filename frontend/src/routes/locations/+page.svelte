<script>
    import {onMount} from "svelte";
    import Location from "../../components/Location/location.svelte"
    import * as api from "../../api.js";

    /** @type {import('./$types').PageData} */
    export let data;

    let locations = [];
    //bouger ça côté server et passer sur mongodb en admin
    onMount(async () => {
        locations = await api.get("locations");
    })

    function deleteLocation(id) {
        locations = locations.filter(location => location._id !== id)
    }

</script>
<body>
{#if !!data.user}
    <nav>
        <a href="/">Home</a>
        <a href="/logout">Log Out</a>
    </nav>
    <div id="form-wrap">
        <h1>Locations list : </h1>
        {#each locations as location (location._id)}
            <Location location="{location}" onDelete={deleteLocation}></Location>
        {/each}
    </div>
{:else}
    <p>
        Please <a href="/login">Login</a> before access this page
    </p>
{/if}
</body>