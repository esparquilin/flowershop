import classes from "./Products.module.css";

const PRODUCTS = [
  { id: 1, productName: "Roses", image: "link", description: "description" },
  { id: 2, productName: "Tulips" },
  { id: 3, productName: "Roses" },
  { id: 4, productName: "Tulips" },
  { id: 5, productName: "Roses" },
  { id: 6, productName: "Tulips" },
  { id: 7, productName: "Roses" },
  { id: 8, productName: "Tulips" },
];

function Products() {
  return (
    <section className={classes.products}>
      <h2>Products</h2>
      <div className={classes.productsList}></div>
    </section>
  );
}

export default Products;
