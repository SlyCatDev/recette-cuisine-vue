<template>
<label>
    <input type="checkbox" v-model="model">
        {{ label }}
</label>
</template>

<script setup lang="ts">

const model = defineModel()

defineProps({
    label: String
})
const emits = defineEmits(['check', 'uncheck'])
const onChange = (event: { currentTarget: { checked: boolean; }; }) => {
    if (event.currentTarget.checked) {
        emits('check', event.currentTarget)
    } else {
        emits('uncheck', event.currentTarget)
    }
}
</script>