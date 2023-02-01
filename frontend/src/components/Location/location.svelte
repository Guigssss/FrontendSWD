<script>
    export let location;
    let isActive;
    export let onDelete;
    function onLoad(){
        isActive=!isActive;
    }
    const deleteLocation = async(id)=>{
        const res = await fetch(`http://localhost:3000/locations/${id}`,{
            method: 'DELETE'
        })
        onDelete(location._id)
    }
</script>

<body>
    <p>{location.address}</p>
</body>
