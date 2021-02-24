<template>
    <div>
        <p>Please select a customer</p>
        <hr>
        <ul class="list-group">
            <router-link tag="li" to="customer/1" class="list-group-item" style="cursor: pointer">Customer 1</router-link>
            <router-link tag="li" to="customer/2" class="list-group-item" style="cursor: pointer">Customer 2</router-link>
            <router-link tag="li"  to="customer/3" class="list-group-item" style="cursor: pointer">Customer 3</router-link>
        </ul>
    </div>
</template>