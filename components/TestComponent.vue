<script setup lang="ts">
let number = $ref({ input1: 0, input2: 0 });
const total = computed<number>(() => number.input1 + number.input2);
</script>

<template>
  input 1 :
  <QInput filled dense type="number" v-model.number="number.input1"></QInput>
  <br />
  input 2 : <QInput type="number" v-model.number="number.input2"></QInput>
  <h2>Total:{{ total }}</h2>
</template>
