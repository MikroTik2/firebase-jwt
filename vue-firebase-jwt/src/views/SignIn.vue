<template>
    <div class="container">
        
        <form class="flex flex-column gap-3" :style="{ width: '500px' }">
            <h2>Sign In</h2>

            <Message severity="warn" v-if="authStore.error"> {{ authStore.error }} </Message>
        
            <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user"></i>
                </span>

                <InputText type="email" placeholder="Your email" v-model.trim="email" />
            </div>

            <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-at"></i>
                </span>

                <Password toggleMask v-model.trim="password" placeholder="Your password" />
            </div>

            <Loader v-if="authStore.loader"/>

            <div class="flex flex-column gap-3" v-else>
                <Button label="Sign In" @click="signin"/>

                <span>Are you not registered yet? 
                    <router-link to="/sign-up">Sign Up</router-link>
                </span>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '@/stores/auth';
    import Loader from '@/components/Loader.vue';
    import InputText from 'primevue/inputtext';
    import Password from 'primevue/password';
    import Button from 'primevue/button';
    import Message from 'primevue/message';

    const authStore = useAuthStore();
    const router = useRouter();

    const email = ref('');
    const password = ref('');

    const signin = async () => {
        await authStore.auth({ email: email.value, password: password.value }, 'signin');

        router.push('/product');
    }
</script>
