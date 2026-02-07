<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol>
      <li v-for="(item, index) in items" :key="index">
        <span v-if="index === items.length - 1">
          {{ item.label }}
        </span>
        <router-link v-else :to="item.to">
          {{ item.label }}
        </router-link>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb {
  margin-bottom: 32px;
}

ol {
  display: flex;
  gap: 8px;
  list-style: none;
  padding: 0;
}

li::after {
  content: '›';
  margin-left: 8px;
}

li:last-child::after {
  content: '';
}

a {
  color: #1f3a8a;
  text-decoration: none;
  font-weight: 500;
}
</style>
