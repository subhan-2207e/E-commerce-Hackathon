import React from 'react'

const Footer = () => {

  return (
    <div>
         {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-bold text-gray-900">Funiro.</h2>
            <p className="mt-4 text-gray-600">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-600 uppercase">Links</h3>
            <ul className="mt-4 space-y-5">
              <li><a href="#" className="text-black hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-black hover:text-gray-900">Shop</a></li>
              <li><a href="#" className="text-black hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-black hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm font-bold text-gray-600 uppercase">Help</h3>
            <ul className="mt-4 space-y-5">
              <li><a href="#" className="text-black hover:text-gray-900">Payment Options</a></li>
              <li><a href="#" className="text-black hover:text-gray-900">Returns</a></li>
              <li><a href="#" className="text-black hover:text-gray-900">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold text-gray-600 uppercase">Newsletter</h3>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-2 text-sm text-gray-600 border underline"
              />
              <button
                type="submit"
                className="px-2 py-2 text-sm text-black underline"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8  pt-4 text-left px-4 text-black">
          <p className="text-sm text-black">&copy; 2023 Funiro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer