import React, {useState} from 'react';
import Modal from './Modal';
import { project } from '../functions/data';

const Project = () => {
  const [modal, openModal] = useState(false);
  return (
    <div>
      {project.map((data, index) => (
        <button className="group bg-white shadow rounded-md p-3"
          onClick={() => openModal(!modal)} key={index}>
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img
            src={data.image}
            alt={data.alt}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700 text-center font-bold">{data.title}</h3>
          {modal && <Modal image={data.image} key={index} /> }
      </button>
      ))}
      
    </div>
    
  )
}

export default Project;
