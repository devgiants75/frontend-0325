import React from 'react'
import { useSearchParams } from 'react-router-dom'

interface Product {
  id: number;
  name: string;
  category: string;
}

const products: Product[] = [
  { id: 1, name: 'Product A', category: 'Category 1'},
  { id: 2, name: 'Product B', category: 'Category 2'},
  { id: 3, name: 'Product C', category: 'Category 1'}
];

export default function QueryParams02() {

  const [searchParams, setSearchParams] = useSearchParams();

  // filter값에는 ''(빈문자열), 'Category 1', 'Category 2'
  const filter = searchParams.get('category') || '';

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ category: e.target.value });
  }

  const filteredProducts = products.filter(product => 
    filter === '' || product.category === filter
  );

  return (
    <div>
      <h2>Product List</h2>
      <select value={filter} onChange={handleFilterChange}>
        <option value="">All Categories</option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
      </select>

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name} - {product.category}</li>
        ))}
      </ul>
    </div>
  )
}
