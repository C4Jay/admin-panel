<template>
    <pure-vue-chart
  :points="[3,5,2,5,4]"
  :width="400"
  :height="200"
/>
</template>

<script>
import PureVueChart from 'pure-vue-chart';

export default {
    name: 'HomeChrt',

components: {
    PureVueChart,
},
}
</script>
