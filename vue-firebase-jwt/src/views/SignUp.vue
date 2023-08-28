<template>
    <div class="container" >
        <form class="flex flex-column gap-3" :style="{ width: '500px' }">

            <Message severity="warn" v-if="authStore.error"> {{ authStore.error }} </Message>

            <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user"></i>
                </span>

                <InputText type="email" placeholder="Your email" v-model.trim="email"/>
            </div>

            <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-at"></i>
                </span>

                <Password toggleMask v-model.trim="password" placeholder="Your password" />
            </div>

            <Loader v-if="authStore.loader"/>

            <div class="flex flex-column gap-3" v-else>
                <Button label="Sign Up" @click="signup"/>

                <span>Are you already registered? 
                    <router-link to="/sign-in">Sign In</router-link> 
                </span>
            </div>
        </form>
    </div>
</template>

<script setup>  
    import { ref } from 'vue';
    import { useAuthStore } from '@/stores/auth';
    import Loader from '@/components/Loader.vue';
    import InputText from 'primevue/inputtext';
    import Password from 'primevue/password';
    import Button from 'primevue/button';
    import Message from 'primevue/message';

    const authStore = useAuthStore();

    const email = ref('');
    const password = ref('');

    const signup = async () => {
        await authStore.signup({ email: email.value, password: password.value });
    };
</script>
