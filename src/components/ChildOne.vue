<template>
    <ChildTwo v-bind:model="model" v-on:update:model="$emit('update:model', $event)" />
</template>
<script>
import ChildTwo from './ChildTwo.vue';
export default {
    name: 'ChildOne',
    emits: ['update:model'],
    components: {
        ChildTwo
    },
    props: {
        model: null
    }
}
</script>