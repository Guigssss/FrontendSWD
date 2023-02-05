<script>
    import * as api from "../../api.js"

    let location = {
        filmType: "",
        filmProducerName: "",
        startDate: "",
        endDate: "",
        filmName: "",
        district: "",
        geolocation: {
            coordinates: [""],
            type: "Point",
        },
        sourceLocationId: "",
        filmDirectorName: "",
        address: "",
        year: "",
    }

    export let onAdd;
    export let data;

    function addLocation() {
        const res = api.post(`locations`, location, data.user);
        onAdd();
    }
</script>

<body id="form">
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
        <input type="text" placeholder="coordinates" bind:value="{location.geolocation.coordinates}" required><i
            class="validation"><span></span><span></span></i>
    </fieldset>
    <fieldset>
        <input type="text" placeholder="sourceLocationId" bind:value="{location.sourceLocationId}" required><i
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
<button on:click={addLocation}> Save</button>
</body>