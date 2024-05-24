{
    // ================================================== //
    let age: number;
    let isStudent: boolean;
    
    age = 25;
    isStudent = true;
    console.log(`Age: ${age} / IsStudent: ${isStudent}`);
    // Age: 25 / IsStudent: true
    
    // =================================================== //
    type ProductType = {
      id: string;
      name: string;
      price: number;
    }
    
    const product: ProductType = {
      id: 'p1',
      name: 'Notebook',
      price: 1200
    }
    
    console.log(`${product.id}, ${product.name}, ${product.price}`);
    // p1, Notebook, 1200
}