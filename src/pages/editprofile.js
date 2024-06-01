import React from 'react';
import Header from '../components/Navbar'

export default function Editprofile() {
  return (
      <div className=" text-white dark:text-black p-4">
        <Header />
          <h1 className="text-3xl font-bold mt-4 text-white">Edit Profile</h1>
          <div className="mt-4 w-full flex flex-col items-center">
              <img src="https://placehold.co/100x100" alt="Profile Image" className="rounded-full h-32 w-32" crossorigin="anonymous"/><br></br>
              <button className="bg-blue-600 text-white px-4 py-2 w-40 mt-2 rounded-lg">UPLOAD IMAGE</button>
          </div>
          
          <div className='flex flex-row'>
            <div className="flex flex-col md:flex-row mt-6 w-2/4">
                <div className="flex-1 p-4">
                    <div className="mb-4 flex flex-row w-1/2 justify-between">
                        <label className="block text-zinc-400">Username:</label>
                        <span className="text-blue-400">Study Partner</span> 
                    </div>
                    <div className="mb-4 flex flex-row w-1/2 justify-between">
                        <label className="block text-zinc-400">Contact:</label>
                        <span className="text-blue-400">9238***102</span>
                    </div>
                    <div className="mb-4 flex flex-row w-1/2 justify-between">
                        <label className="block text-zinc-400">E-Mail:</label>
                        <span className="text-blue-400">xyz@gmail.com</span>
                    </div>
                    <div className="mb-4 flex flex-row w-1/2 justify-between">
                        <label className="block text-zinc-400">Password:</label><br></br>
                        <div className='flex flex-col'>
                          <input type="password" placeholder="Current Password" className="bg-zinc-800 text-white py-2 w-full rounded mb-2"/>
                          <input type="password" placeholder="New Password" className="bg-zinc-800 text-white py-2 w-full rounded mb-2"/>
                          <input type="password" placeholder="Confirm Password" className="bg-zinc-800 text-white py-2 w-full rounded mb-2"/>
                          <center><button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-lg">Submit</button></center>
                        </div>
                    </div>
                    <div className="mb-4 flex flex-row w-1/2 justify-between">
                        <label className="block text-zinc-400">GitHub URL:</label>
                        <a href="https://github.com/xyz" className="text-blue-400">https://github.com/xyz</a>
                    </div>
                    <div className="mb-4 flex flex-row w-1/2 justify-between">
                        <label className="block text-zinc-400">LinkedIn URL:</label>
                        <a href="https://linkedin.com/xyz" className="text-blue-400">https://linkedin.com/xyz</a>
                    </div>
                </div>
            </div>
            <div className="flex-1 pr-20 mt-6 w-1/2">
                <div className="mb-4 flex flex-row items-center justify-between">
                    <label className="block text-zinc-400 mr-2 w-2/6">New Username:</label>
                    <div className='w-full'>
                      <input type="text" className="flex-1 bg-zinc-800 text-white p-2 rounded mr-2 w-3/5"/>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Submit</button>
                    </div>
                </div>
                <div className="mt-6">
                    <img src="https://placehold.co/300x300" alt="Illustration" className="mx-auto h-60 w-96" crossorigin="anonymous"/>
                </div>
                <div className="mb-4 mt-6 flex flex-row items-center justify-between">
                    <label className="block text-zinc-400 mr-2 w-2/6">New GitHub URL:</label>
                    <div className='w-full'>
                      <input type="text" className="flex-1 bg-zinc-800 text-white p-2 rounded mr-2 w-3/5"/>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Submit</button>
                    </div>
                </div>
                <div className="mb-4 flex flex-row items-center justify-between">
                    <label className="block text-zinc-400 mr-2 w-2/6">New LinkedIn URL:</label>
                    <div className='w-full'>
                      <input type="text" className="flex-1 bg-zinc-800 text-white p-2 rounded mr-2 w-3/5"/>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Submit</button>
                    </div>
                </div>
            </div>
          </div>
      </div>
  )
}