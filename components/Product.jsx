import Image from "next/image"
import Link from "next/link"
export default function Product({plant}){
  return (
      <Link href={`/plant/${plant.id}`} className="group flex flex-col justify-between border-2 border-red-700 border-solid">
          <div className="relative aspect-w-1 aspect-h-1 w-full h-[250px] overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 ">
            <Image
            src={plant.img} 
            placeholder="empty"
            fill
            style={{objectFit:"cover"}}
            alt="plant preview image" 
            className="h-full w-full object-cover object-center group-hover:opacity-75">
              
            </Image>
          </div>
          <h3 className="mt-4 text-lg text-black-700">{plant.name}</h3>
          <p className="text-xs text-gray-600">{plant.description}</p>
          <div className="flex justify-between my-3">
            <div>
              <p className="mt-1 text-lg font-medium text-gray-900">{plant.price}</p>
              <p className="text-xs italic text-gray-600">{plant.availability}</p>
            </div>
            <button className="rounded-full px-4 py-1 bg-black text-white text-sm" type="button">Add To Cart</button>
          </div>
      </Link>
    )
}