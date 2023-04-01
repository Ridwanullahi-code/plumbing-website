import { useState } from 'react'
import { useLocation } from 'react-router';
import Navbar from './Navbar'
import Footer from './Footer'
import { AiFillCloseCircle } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/project-page-02-secondary-project-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/project-page-02-tertiary-project-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/project-page-02-tertiary-project-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/project-page-02-featured-project-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false);
  const { state } = useLocation();
  const { project } = state;

  return (
    <div>
      <Navbar />
      <div className="bg-white relative">
        <NavLink to="/">
          <AiFillCloseCircle
          className="text-blue-500 h-10 w-10 absolute right-3 top-3 cursor-pointer hover:text-blue-700 active:text-blue-900"
        />
        </NavLink>
      <div className="pt-10">
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3
          lg:gap-x-8 lg:px-8">
          <div className="md:aspect-w-3 my-4 md:my-0 md:aspect-h-2 aspect-w-3 aspect-h-4 overflow-hidden rounded-lg lg:block">
            <img
              src={project.overview[0]}
              alt={project.alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className=" my-4 md:my-0 md:aspect-w-3 md:aspect-h-2 aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
              <img
                src={project.overview[1]}
                alt={project.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className=" my-4 md:my-0 md:aspect-w-3 md:aspect-h-2 aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
              <img
                src={project.overview[2]}
                alt={project.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
            <div className=" my-4 md:my-0 aspect-w-4 aspect-h-5 sm:overflow-hidden
           sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={project.overview[3]}
              alt={project.alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Pr info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{project.title}</h1>
            </div>
            
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{project.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{project.detail}</p>
              </div>
            </div>
            </div>
            {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">project information</h2>
            <p className="text-3xl tracking-tight text-gray-900">Duration: </p>
            {/* status */}
            <div className="mt-6">
              <h3 className="sr-only">Project Status</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  Work Status: 
                </div>
                <p className="ml-3 text-sm font-medium text-indigo-600">
                  {project.status}
                </p>
              </div>
            </div>

            <form className="mt-10">
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Video Presentation
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    <Footer />
  </div>
    
  )
}
