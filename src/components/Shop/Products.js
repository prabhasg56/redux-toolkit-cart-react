import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    id: 1,
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: 2,
    title: "Test2",
    price: 10,
    description: "This is a second product - amazing!",
  },
  {
    id: 3,
    title: "Test3",
    price: 15,
    description: "This is a third product - amazing!",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {products.map((product, index) => {
        return (
          <ul key={index}>
            <ProductItem
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          </ul>
        );
      })}
    </section>
  );
};

export default Products;
