import React from "react";

const Project = () => {
  return (
      <div className="bg-white md:mx-5 rounded-md">
      <h2 className="text-blue-500 font-bold text-4xl text-center pt-5 pb-2">Recent works</h2>
      <p className="text-gray-500 max-w-lg mx-auto text-center py-1" style={{ fontSize: '14px' }}>
        Action speaker than word, check our successful completed project to clear all the doubts.
        We are professional in this work
        </p>
      <div className="mx-auto max-w-2xl py-10 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a href="#" className="group bg-white shadow rounded-md p-3">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700 text-center font-bold">Earthen Bottle</h3>
          </a>

          <a href="#" className="group bg-white shadow rounded-md p-3">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                alt="Olive drab green insulated bottle with flared screw lid and flat top."
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700 text-center font-bold">Nomad Tumbler</h3>
          </a>

          <a href="#" className="group bg-white shadow rounded-md p-3">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                alt="Person using a pen to cross a task off a productivity paper card."
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700 text-center font-bold">Focus Paper Refill</h3>
          </a>

          <a href="#" className="group bg-white shadow rounded-md p-3">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700 text-center font-bold">
              Machined Mechanical Pencil
            </h3>
          </a>
          <a href="#" className="group bg-white shadow rounded-md p-3">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700 text-center font-bold">
              Machined Mechanical Pencil
            </h3>
          </a>
          <a href="#" className="group bg-white shadow rounded-md p-3">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700 text-center font-bold">
              Machined Mechanical Pencil
            </h3>
          </a>
        </div>
          </div>
          <div className="flex justify-center items-center max-w-xl mx-auto">
            <button className="border border-deepBlue font-bold text-white flex-grow p-4
            rounded-md bg-paleBlue hover:opacity-90 active:bg-deepBlue sm:mx-7 xsm:mx-7">View all</button>
          </div>
    </div>
  );
};

export default Project;
