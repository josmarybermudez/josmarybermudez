// export default function ProductDetails({
//   params,
// }: {
//   params: { productId: String };
// }) {
//   return <h1>Details about {params.productId}</h1>;
// }

// Define a simple array of product IDs
const productIds = ["123", "456", "789"]; // Example product IDs

export async function generateStaticParams() {
  // Since we're not fetching data, we can directly map our predefined product IDs
  return productIds.map((productId) => ({ productId }));
}
