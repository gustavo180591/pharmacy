<script>
    export let product;
  </script>
  
  <div class="card">
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <button class="btn">Add to Cart</button>
  </div>
  
  <style>
    .card {
      border: 1px solid #ddd;
      padding: 1em;
      margin: 1em;
      border-radius: 5px;
    }
    .btn {
      background-color: #007BFF;
      color: white;
      padding: 0.5em;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
  