<script>
    import { onMount } from 'svelte';
    import ProductCard from './components/ProductCard.svelte';
    let products = [];
  
    onMount(async () => {
      const res = await fetch('/api/products');
      products = await res.json();
    });
  </script>
  
  <main>
    <h1>Products</h1>
    {#each products as product}
      <ProductCard {product} />
    {/each}
  </main>
  