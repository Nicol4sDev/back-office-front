<template>
  <div class="h-screen flex flex-col  items-center justify-center bg-[#FAFAFA] ">
        <div class="flex flex-row justify-center items-center align-middle">
            <nuxt-img src="/applelogo.png" class="items-center justify-center" width="40" height="40"/>
            <p class="text-2xl font-inter font-medium text-gray-900">BinaryBrew</p>
        </div>
            <p class="text-2xl mt-16 font-inter font-medium text-gray-900">Sign in to account</p>
            <p class="text-gray-600 font-inter text-lg mt-3">Don’t have an account? <a class="text-[#6D28D9]" href=""> Sign up</a></p>
        <div class="flex-col items-center z-[40] justify-center">
            <Card/>
        </div>    
        <div class="absolute inset-0 z-[0]">
      <Particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :options="particlesOptions"
      />
    </div>
    </div>
</template>


<script>
import { loadFull } from "tsparticles";

export default {
  props: {
    msg: String,
  },
  data() {
    return {
      particlesOptions: {
        fullScreen: {
          zIndex: 0,
        },
        emitters: [
          {
            position: {
              x: 0,
              y: 0,
            },
            rate: {
              quantity: 0.5,
              delay: 0.15,
            },
            particles: {
    color: { value: "#00000" },
    line_linked: {
      color: "#5A5F73",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 1,
      straight: false
    },
    number: { density: { enable: true, value_area: 400 }, value: 80 },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
      random: false,
      value: 0.5
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400"
      },
      image: {
        height: 100,
        replace_color: true,
        src: "images/github.svg",
        width: 100
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "circle"
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 20, sync: false },
      random: true,
      value: 3
    }
  },
  polygon: {
    draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: "none",
    url: ""
  },
  retina_detect: true
          },
        ],
      },
    };
  },
  methods: {
    particlesInit: async (engine) => {
      await loadFull(engine);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
