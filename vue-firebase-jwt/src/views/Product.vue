<template>
    <div class="product">

        <h2 class="product-title">All Products</h2>

        <div class="product-elements">
            <div class="product-element" v-for="product in products" :key="product.id">
                <h3 class="product-element-title">{{ product.title }}</h3>
                <img class="product-element-images" :src="product.images[0]" :alt="product.title">
            </div>
        </div>
    </div>
</template>

<script setup> 
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    const products = ref([]);

    const getProduct = async () => {
        try {

            const response = await axios.get("https://dummyjson.com/products");
            products.value = response.data.products;

            console.log(response.data);

        } catch (error) {
            console.log('Error: ', error);
        };
    }

    onMounted(() => {
        getProduct();
    });

</script>

<style lang="scss" scoped>
    .product {

        max-width: 1000px;
        margin: 0 auto;

        &-title {
            text-align: center;
            margin-top: 50px;
        }

        &-elements {
            display: grid;
            gap: 20px;
            margin-top: 50px;
            margin-bottom: 50px;
            grid-template-columns: repeat(2, 1fr);
        }

        &-element {
            
            display: grid;
            row-gap: 10px;
            

            &-title {
                
            }

            &-images {
                width: 100%;
                object-fit: cover;
                height: 200px;
            }
        }
    }
</style>