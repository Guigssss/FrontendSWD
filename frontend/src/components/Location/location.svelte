<script>
    export let location;
    export let onDelete;
    let isDetailed = false;
    const deleteLocation = async(id)=>{
        const res = await fetch(`http://localhost:3000/locations/${id}`,{
            method: 'DELETE'
        })
        onDelete(location._id)
    }

    function showDetails(){
        isDetailed =!isDetailed;
    }
</script>

<body id="form">
    <p on:click={showDetails} id="title">Film : {location.filmName}</p>
    {#if isDetailed}
        <p>Bonjour</p>
        <button on:click={deleteLocation(location._id)} id="button-wrap"> Delete </button>
    {/if}
</body>
