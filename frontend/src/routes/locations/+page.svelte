<script>
    import {onMount, SvelteComponent} from "svelte";
    import Location from "../../components/Location/location.svelte"
    let locations = [];
    onMount(async () => {
        const res = await fetch("http://localhost:3000/locations")
        locations = await res.json();
        console.log(locations)
    })
    function deleteLocation(id){
        locations = locations.filter(location => location._id !== id)
    }
</script>
<body>
<nav>
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</nav>
<div id="login-form-wrap">
    <h1>Locations list : </h1>
    {#each locations as location (location._id)}
        <Location location="{location}" onDelete={deleteLocation}></Location>
    {/each}
</div>
</body>