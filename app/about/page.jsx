"use client"
import React from 'react'

export default function About() {
    const handleLearnMore = () => {
        window.location.href = '/about/moin';
    }

  return (
      <div className="w-full flex flex-col px-96 gap-12 py-24">
      <h1 className="text-center">ABOUT US</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptate tenetur facilis corporis! Recusandae cumque quibusdam, iste unde animi repudiandae quaerat error voluptatum. Adipisci possimus cum facere fugit at natus animi in pariatur laborum! Distinctio.</p>
      <button onClick={handleLearnMore} className="bg-white text-black px-4 py-2 rounded-sm w-md mx-auto">Learn More</button>
    </div>
  )
}
