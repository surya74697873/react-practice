
function Product({image, name, desc}) {
  return (
    <div>
      <img src={image} alt={image} />
      <h2>{name}</h2>
      <p>{desc}</p>
      product
    </div>
    )
}

export default Product;