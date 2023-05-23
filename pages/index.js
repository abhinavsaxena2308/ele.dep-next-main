import Head from "next/head"
import React from "react"
import bgVideo from "../public/video/Circuit.mp4"
import facultyData from "../public/Data/faculty.json"
// import card from "../pages/card.js"
import Link from "next/link"
import { useState } from 'react'
import { getSession, useSession, signOut } from "next-auth/react"
import Image from "next/image"
import Photo from "../public/image/P1.jpg"

export default function Home() {

  const { data: session } = useSession()

  function handleSignOut() {
    signOut()
  }

  return (
    <div className="">
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  )
}



//auth user

function User({ session, handleSignOut }) {
  return (
    <main className="container mx-auto text-center py-52">
      <h3 className='text-4xl font-bold text-white'>Student Homepage</h3>

      <div className='details text-white'>
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center text-white">
        <button onClick={handleSignOut} className='mt-5 px-10 py-1 rounded-sm  bg-orange-600'>Sign Out</button>
      </div>

      <div className='flex justify-center text-white'>
        <Link href={'/profile'}><p className='mt-5 px-10 py-1 rounded-sm text-gray-50'>Profile Page</p></Link>
      </div>
    </main>
  )
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/home',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}