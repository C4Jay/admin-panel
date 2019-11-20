<template>
<v-container>
    <v-flex xs-12>
        <v-row>
    <v-card elevation="19" height="209" width="408" color="purple">
    <pure-vue-chart
  :points="[3,5,2,5,4]"
  :width="400"
  :height="200"
/>
<v-card-text>number of profiles</v-card-text>
    </v-card>
    <v-card elevation="19" height="209" width="408" color="purple">
    <pure-vue-chart
  :points="[3,5,2,5,4]"
  :width="400"
  :height="200"
/>
<v-card-text>number of profiles</v-card-text>
    </v-card>
        </v-row>
    </v-flex>
</v-container>
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
