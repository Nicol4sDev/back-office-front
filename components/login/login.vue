<template>
  <div class="h-screen flex flex-col items-center justify-center bg-[#FAFAFA] ">
        <div class="flex flex-row justify-center items-center align-middle">
            <nuxt-img src="/applelogo.png" class="items-center justify-center" width="40" height="40"/>
            <p class="text-2xl font-inter font-medium text-gray-900">BinaryBrew</p>
        </div>
            <p class="text-2xl mt-16 font-inter font-medium text-gray-900">Sign in to account</p>
            <p class="text-gray-600 font-inter text-lg mt-3">Don’t have an account? <a class="text-[#6D28D9]" href="">Sign up</a></p>
          <div class="flex-col items-center z-10 justify-center mt-10">
            <Card/>
          </div>
    </div>
</template>

<script setup>
  
</script>