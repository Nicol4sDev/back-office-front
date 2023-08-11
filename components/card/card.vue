<template>
  <div class="w-100 p-[6rem] z-40 rounded-[2.5rem] overflow-hidden shadow-lg">
      <div class="px-6 py-4 z-40">
        <p class="text-sm font-inter  mb-2">
          Email address
        </p>
        <Input :width="96" label="Email address" inputType="text"/>
        <p class="text-sm font-inter  mt-5 mb-2">
          Password
        </p>
        <Input :width="96" label="Password" inputType="password"/>
        <Button text="Sign in" :width="96" background="#6D28D9"/>
      </div>
  </div>
</template>