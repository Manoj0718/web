<template>
  <!--pre load issue  -  https://stackoverflow.com/questions/66514815/preload-page-in-nuxtjs/70542451#70542451-->
  <div id = "Particlescomponent">
    <Particles 
  
      id="tsparticles"
      height="{window.outerHeight}"
     
      :options="{
        background: {
          color: {
            value: '#020234',
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 101,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#BD9ECE',
          },
          links: {
            color: '#FFD700',
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'bottom',
            enable: true,
            outMode: 'out',
            random: true,
            speed: 1,
            straight: false,
            vibrate : true,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }"
    />
  </div>
    
</template

<script>
export default {
  loading : true,
}
</script>

<style scoped>
#tsparticles {
  position: absolute;
  width: 100%;
z-index : -1;
  opacity : 1;
}
</style>
