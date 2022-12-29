<template>
    <input v-bind:value="model" v-on:input="$emit('update:model', $event.target.value)">
</template>
<script>
export default {
    name: 'ChildTwo',
    emits: ['update:model'],
    props: {
        model: null
    }
}
</script>