import Product from '@/components/Product'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import { data } from '../data'

const inter = Inter({ subsets: ['latin'] })

export default function Home({plants}) {



  return (
    <>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {plants.map((plant,index )=> (
        <Product 
          key={index}
          plant={plant}/>
        ))}
      </div>

    </>
  )
}


export async function getStaticProps(){
  const res = await fetch('http://localhost:3000/api/plants') 
  const plants = await res.json()

  return {
    props: {
      plants
    }
  }


}