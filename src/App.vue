<template>
  <div class="container">
      <div class="row">
        <div class= "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h2>Routing</h2>
            <compHeader />
            <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
import compHeader from './components/Header'
export default {
  components: {
    compHeader
  }
}
</script>