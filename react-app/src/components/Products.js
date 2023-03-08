import productsData from '../data/response.json';

function Products() {
  const products = Object.values(productsData.Products);

  return (
    <div>
        <h1 className='headline'>Unsere Produkte:</h1>
    <section className='Speise' style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '60px'}}>
      {products.map((product) => (
        <div className='productSection' key={product.ProductId}>
        <img className='foodPic' src={ require('../img/icons/gabel.png') } />
        <h2 className='prodName'>{product.Name}</h2>
        <p className='prodPrice'>Preise: {product.Price.Betrag}</p>
        </div>
      ))}
      </section>
    </div>
  );
}

export default Products;