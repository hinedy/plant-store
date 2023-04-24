import Cart from "@/components/Cart";
import Product from "@/components/Product";
import { updateTotal } from "@/features/cart/cartSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Home({ plants }) {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [cartItems, dispatch]);

  return (
    <div className="px-10 py-10 flex justify-center">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-2 lg:col-span-2 xl:grid-cols-3 xl:col-span-3 xl:gap-x-8">
          {plants.map((plant, index) => (
            <Product key={index} plant={plant} cartItems={cartItems} />
          ))}
        </div>

        <div className="col-span-1 relative">
          <div className="sticky right-2 top-12">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/plants");
  const plants = await res.json();

  return {
    props: {
      plants,
    },
  };
}
