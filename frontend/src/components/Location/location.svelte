<script>
    import * as api from "../../api.js";

    export let location;
    export let onDelete;
    export let data;
    let isDetailed = false;
    let isAdmin = false;

    const deleteLocation = async (id) => {
        const res = await api.del(`locations/${id}`, data.user);
        onDelete(location._id);
    }
    const updateLocation = async (id) => {
        const res = await api.patch(`locations/${id}`, location, data.user);
    }

    function showDetails() {
        isDetailed = !isDetailed;
        isAdmin = JSON.parse(atob((data.user).split('.')[1])).role === "admin";
    }
</script>

<body id="form">
<p on:click={showDetails} id="title">Film : {location.filmName}</p>
{#if isDetailed}
    {#if isAdmin}
        <fieldset>
            <input type="text" placeholder="filmType" bind:value="{location.filmType}" required><i
                class="validation"><span></span><span></span></i>
        </fieldset>
        <fieldset>
            <input type="text" placeholder="filmProducerName" bind:value="{location.filmProducerName}" required><i
                class="validation"><span></span><span></span></i>
        </fieldset>
        <fieldset>
            <input type="text" placeholder="startDate" bind:value="{location.startDate}" required><i
                class="validation"><span></span><span></span></i>
        </fieldset>
        <fieldset>
            <input type="text" placeholder="endDate" bind:value="{location.endDate}" required><i
                class="validation"><span></span><span></span></i>
        </fieldset>
        <fieldset>
            <input type="text" placeholder="filmName" bind:value="{location.filmName}" required><i
                class="validation"><span></span><span></span></i>
        </fieldset>
        <fieldset>
            <input type="text" placeholder="district" bind:value="{location.district}" required><i
                class="validation"><span></span><span></span></i>
        </fieldset>
        <fieldset>
            <input type="text" placeholder="filmDirectorName" bind:value="{location.filmDirectorName}" required><i
                class="validation"><span></span><span></span></i>
        </fieldset>
        <fieldset>
            <input type="text" placeholder="address" bind:value="{location.address}" required><i
                class="validation"><span></span><span></span></i>
        </fieldset>
        <fieldset>
            <input type="text" placeholder="year" bind:value="{location.year}" required><i
                class="validation"><span></span><span></span></i>
        </fieldset>
        <div id="buttons-wrap">
            <button on:click={deleteLocation(location._id)}> Delete</button>
            <button on:click={updateLocation(location._id)}> Update</button>
        </div>
    {:else}
        <p class="location-text">id : {location._id} </p>
        <p class="location-text">Type : {location.filmType} </p>
        <p class="location-text">Producer : {location.filmProducerName}</p>
        <p class="location-text">Start Date: {location.startDate}</p>
        <p class="location-text">End Date: {location.endDate}</p>
        <p class="location-text">District: {location.district}</p>
        <p class="location-text">Film Director : {location.filmDirectorName}</p>
        <p class="location-text">Address: {location.address}</p>
        <p class="location-text">Year: {location.year}</p>
    {/if}
{/if}
</body>
