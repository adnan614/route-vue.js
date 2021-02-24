<template>
    <div>
        <h2>Customer page</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur esse voluptatum illum fugit velit. Laborum quas reprehenderit, sint deserunt earum laboriosam fuga, aperiam molestiae quae assumenda exercitationem accusamus velit quia? Nobis adipisci fugit ratione fugiat architecto accusamus quisquam nulla unde.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur esse voluptatum illum fugit velit. Laborum quas reprehenderit, sint deserunt earum laboriosam fuga, aperiam molestiae quae assumenda exercitationem accusamus velit quia? Nobis adipisci fugit ratione fugiat architecto accusamus quisquam nulla unde.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur esse voluptatum illum fugit velit. Laborum quas reprehenderit, sint deserunt earum laboriosam fuga, aperiam molestiae quae assumenda exercitationem accusamus velit quia? Nobis adipisci fugit ratione fugiat architecto accusamus quisquam nulla unde.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur esse voluptatum illum fugit velit. Laborum quas reprehenderit, sint deserunt earum laboriosam fuga, aperiam molestiae quae assumenda exercitationem accusamus velit quia? Nobis adipisci fugit ratione fugiat architecto accusamus quisquam nulla unde.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur esse voluptatum illum fugit velit. Laborum quas reprehenderit, sint deserunt earum laboriosam fuga, aperiam molestiae quae assumenda exercitationem accusamus velit quia? Nobis adipisci fugit ratione fugiat architecto accusamus quisquam nulla unde.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur esse voluptatum illum fugit velit. Laborum quas reprehenderit, sint deserunt earum laboriosam fuga, aperiam molestiae quae assumenda exercitationem accusamus velit quia? Nobis adipisci fugit ratione fugiat architecto accusamus quisquam nulla unde.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur esse voluptatum illum fugit velit. Laborum quas reprehenderit, sint deserunt earum laboriosam fuga, aperiam molestiae quae assumenda exercitationem accusamus velit quia? Nobis adipisci fugit ratione fugiat architecto accusamus quisquam nulla unde.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur esse voluptatum illum fugit velit. Laborum quas reprehenderit, sint deserunt earum laboriosam fuga, aperiam molestiae quae assumenda exercitationem accusamus velit quia? Nobis adipisci fugit ratione fugiat architecto accusamus quisquam nulla unde.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur esse voluptatum illum fugit velit. Laborum quas reprehenderit, sint deserunt earum laboriosam fuga, aperiam molestiae quae assumenda exercitationem accusamus velit quia? Nobis adipisci fugit ratione fugiat architecto accusamus quisquam nulla unde.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur esse voluptatum illum fugit velit. Laborum quas reprehenderit, sint deserunt earum laboriosam fuga, aperiam molestiae quae assumenda exercitationem accusamus velit quia? Nobis adipisci fugit ratione fugiat architecto accusamus quisquam nulla unde.</p>

    <hr>
    
    <button class="btn btn-success" @click="navigateToHome">GO TO HOME</button>
    <hr>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
  
    methods:{
          navigateToHome(){
              this.$router.push({name: 'home'})
          }
    },
    beforeRouteEnter (to, from, next) {
        next(true);
    },
    beforeRouteLeave (to, from, next) {
        next(true);
    }
}
</script>