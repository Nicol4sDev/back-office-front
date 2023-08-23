<template>
  <div class="md:rounded-[2.5rem] md:p-16 sm:p-[0] md:shadow-lg bg-white">
        <p class="text-sm font-inter mb-2">
          Email address
        </p>
        <Input @data-input="captureEmail"  label="Email address" inputType="text" class="sm:mb-4"/>
        <p class="text-sm font-inter mt-5 mb-2">
          Password
        </p>
        <Input @data-input="capturePassword" label="Password" inputType="password"/>
        <div class="mt-5">
        <button @click=login class="bg-violet-700 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full w-full">
            Log in
        </button>
    </div>
  </div>
</template>

<script setup>
import { handleLogin } from '../../api-client/login';
import { toast } from 'vue3-toastify';
const email = ref('')
const password = ref('')

const captureEmail = (emailCaptured) => {
  email.value = emailCaptured
}

const capturePassword = (passwordCaptured) => {
  password.value = passwordCaptured
}

const login = async () => {
  const request = {
    email: email.value,
    password: password.value
  }

  try {
    await handleLogin(request)
    useNuxtApp().$toast.success('Login Successful', {
      autoClose: 3000
    });
  } catch (error) {
    console.log(error)
    useNuxtApp().$toast.error('Login Failed. Please check your credentials and try again.', {
      autoClose: 3000
    });
  }
}
</script>
