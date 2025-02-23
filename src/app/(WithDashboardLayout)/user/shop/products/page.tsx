import ManageProducts from "@/components/modules/shop/products";
import { getAllProducts } from "@/services/Product";

const ManageProductsPage = async ({searchParams}:{searchParams:Promise<{page:string}>}) => {
  const {page} = await searchParams
  const { data, meta } = await getAllProducts(page);
  return (
    <div>
      <ManageProducts meta={meta} products={data} />
    </div>
  );
};

export default ManageProductsPage;