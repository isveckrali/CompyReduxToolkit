import React from 'react'
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from './pages'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Tailwind çalışıyor 🚀
        </h1>

        <p className="mt-4 text-gray-600">
          React + Vite + Tailwind hazır.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Test Button
        </button>
      </div>
    </div>
  )
}

export default App