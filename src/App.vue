<template>
<ChildOne v-model:model="test" />
<pre>
    output: {{ test }}
</pre>  
</template>
<script>
import ChildOne from './components/ChildOne.vue';
export default {
    name: 'App',
    components: {
        ChildOne
    },
    data() {
        return {
            test: 'Hallo VUE!'
        }
    }
}
</script>