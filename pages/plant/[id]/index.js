import { useRouter } from "next/router";

function Plant({plant}) {
    const router = useRouter()
    const {id} = router.query
    return (

        <>
            <h1>{plant.name}</h1>
            <p>This is plant number {id}</p>
        </>
    );
}

export async function getStaticProps(context){
    const res = await fetch(`http://localhost:3000/api/plants/${context.params.id}`)
    const plant = await res.json()
    console.log(plant)
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