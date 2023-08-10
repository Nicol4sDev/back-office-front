<template>
    <div>
      <label class="relative block">
        <div v-if="svgMap[props.svg]">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              v-html="svgMap[props.svg]"
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            ></svg>
          </span>
        </div>
        <input
          :class='`placeholder:italic w-96 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm`'
          :placeholder="props.placeholder"
          :type=props.inputType
          name="search"
        />
      </label>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    width: {
      type: Number,
      required: true
    },
    svg: String,
    placeholder: String,
    inputType: String
  });
  
  const svgMap = {
    user: `
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    `,
    password: `
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    `,
  };
  </script>
  