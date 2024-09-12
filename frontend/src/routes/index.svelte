<script>
    import ProductCard from '../components/ProductCard.svelte';
    let products = [];
  
    async function fetchProducts() {
      const response = await fetch('/api/products');
      products = await response.json();
    }
  
    fetchProducts();
  </script>
  
  <main>
    <h1>Pharmacy Products</h1>
    {#each products as product}
      <ProductCard {product} />
    {/each}
  </main>
  