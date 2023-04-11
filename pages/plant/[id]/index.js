import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "@/features/cart/cartSlice";
import AmountControls from "@/components/AmountControls";
import Button from "@mui/material/Button";


function Plant({plant}) {
    
    const { cartItems } = useSelector((state) => state.cart);
    const inCart = cartItems.find((item) => plant.id === item.id);
    const dispatch = useDispatch();

    const router = useRouter()
    const {id} = router.query
    const {
        img,
        name,
        category,
        description,
        price,
        availability,
        size,
        light_requirements: lightRequirements,
        watering_requirements: wateringRequirements,
        soil_type: soilType

    } = plant
    return (
        <div className="grid md:grid-cols-5 md:gap-x-6">
            <div className="relative md:col-span-2 max-w-lg mx-6 h-[500px]">
                <Image   
                    src={img}
                    alt={`${name} image`}
                    placeholder="empty"
                    fill
                    style={{objectFit: "cover"}}
                ></Image>            
            </div>
            <div className="md:col-span-2 p-6">
                <h1 className="text-lg font-bold">{name}</h1>
                <p>{description}</p>
                <p>Category: {category}</p>
                <p>Size: {size}</p>
                <p>Light Requirements: {lightRequirements}</p>
                <p>Watering Requirements: {wateringRequirements}</p> 
                <p>Soil Type: {soilType}</p> 
            </div>
            <div className="md:col-span-1 p-6 flex flex-col">
                <div className="flex flex-row justify-between w-full px-5">
                    <p>{price}</p> 
                    <p>{availability}</p> 
                </div>
                
                {inCart && inCart.amount >= 1 ? (
                <AmountControls {...inCart}></AmountControls>
                ) : (
                <Button
                    onClick={(e) => {
                    
                    dispatch(addItem({ ...plant, amount: 1 }));
                    }}
                    variant="outlined"
                    size="small"
                    color="primary"
                >
                    Add to Cart
                </Button>
                )}

            </div>
        </div>
    );
}

export async function getStaticProps(context){
    const res = await fetch(`http://localhost:3000/api/plants/${context.params.id}`)
    const plant = await res.json()
    return {
        props: {
          plant
        }
      }
}

export async function getStaticPaths(){
    const res = await fetch(`http://localhost:3000/api/plants`)
    const plants = await res.json()
    const ids = plants.map(plant => plant.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false,
    }
}

export default Plant;