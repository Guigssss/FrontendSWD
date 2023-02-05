<script>
    import {onMount} from "svelte";
    import Location from "../../components/Location/location.svelte"
    import Forms from "../../components/Forms/form.svelte"
    import * as api from "../../api.js";

    /** @type {import('./$types').PageData} */
    export let data;

    let locations = [];
    let isAdding = false;
    let isAdmin = false;

    onMount(async () => {
        if (!!data.user) {
            locations = await api.get("locations", data.user);
        }
        if (JSON.parse(atob((data.user).split('.')[1])).role === "admin") {
            isAdmin = true;
        }
    })

    function deleteLocation(id) {
        locations = locations.filter(location => location._id !== id)
    }

    function showAddLocation() {
        isAdding = true;
    }

    function addLocation() {
        isAdding = false;
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
        {#if isAdmin}
            <button on:click={showAddLocation}> Create Location</button>
            {#if isAdding}
                <Forms onAdd="{addLocation}" data="{data}"></Forms>
            {/if}
        {/if}
        {#each locations as location (location._id)}
            <Location location="{location}" onDelete={deleteLocation} data="{data}"></Location>
        {/each}
    </div>
{:else}
    <p>
        Please <a href="/login">Login</a> before access this page
    </p>
{/if}
</body>