<template>
  <div class="pagination">
    <button :disabled="params.page === 1" @click.prevent="params.page--; $emit('reload')">Prev</button>
    <button v-for="page in totalPages"
            :class="{'active': params.page === page}"
            @click="params.page = page; $emit('reload')"
    >
      {{ page }}
    </button>
    <button :disabled="params.page === totalPages" @click.prevent="params.page++; $emit('reload')">Next</button>
  </div>
</template>

<script lang="ts" setup>

import {PropType} from "vue";
import {PageRequestParams} from "@/types/PageRequestParams";

defineProps({
  params: Object as PropType<PageRequestParams>,
  totalPages: Number
})
</script>

<style scoped>

</style>
