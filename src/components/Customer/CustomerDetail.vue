<template>
    <div>
         <h2>Customer Detail {{$route.params.id}}</h2>
         <router-link tag="button"
        :to="{name: 'customerEdit',query:{locale: 'en',q: 100}}"
          class="btn btn-primary" >
             Edit User
          </router-link>
    </div>
</template>