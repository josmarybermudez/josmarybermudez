export default function ProductDetails({
  params,
}: {
  params: { productId: String };
}) {
  return <h1>Details about {params.productId}</h1>;
}
