<template>
    <div class="mt-5">
        <button class="bg-violet-700 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full w-full">
            Log in
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    width: Number,
    text: String,
    background: String,
  });
</script>

