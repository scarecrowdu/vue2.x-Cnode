<template>
  <div class="mint-spinner-snake" :style="{
    'border-top-color': spinnerColor,
    'border-left-color': spinnerColor,
    'border-bottom-color': spinnerColor,
    'height': spinnerSize,
    'width': spinnerSize
    }">
    </div>
</template>

<script>
  export default {
    name: 'snake',
    computed: {
      spinnerColor() {
        return this.color || this.$parent.color || '#80bd01';
      },

      spinnerSize() {
        return (this.size || this.$parent.size || 28) + 'px';
      }
    },

    props: {
      size: Number,
      color: String
    }
  };
</script>

<style lang="css">
  .mint-spinner-snake {
    animation: mint-spinner-rotate 0.8s infinite linear;
    border: 4px solid transparent;
    border-radius: 50%;
  }

  @keyframes mint-spinner-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>