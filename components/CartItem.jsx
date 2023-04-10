import Image from "next/image";
import AmountControls from "./AmountControls";

function CartItem(props) {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 m-2 bg-white rounded-lg overflow-hidden ring-1 ring-gray-100 ">
      <div className="relative col-span-1 h-16 w-full">
        <Image
          src={props.img}
          alt="product-image"
          fill
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
      <div className="col-span-2 px-1">
        <p className="font-bold">{props.name}</p>
        <p className="text-xs">{props.description}</p>
      </div>
      <div className="col-span-3 flex justify-between items-center px-1">
        <AmountControls {...props}></AmountControls>
        <p>₹ {+props.price * +props.amount}</p>
      </div>
    </div>
  );
}

export default CartItem;
