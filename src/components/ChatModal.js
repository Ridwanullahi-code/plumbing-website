import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { FaFacebookMessenger, FaInstagram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function ChatModal() {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#00000081] bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full  justify-center items-start p-4 text-center  sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <AiFillCloseCircle
                        className="text-blue-500 h-10 w-10 absolute right-3 top-3 cursor-pointer hover:text-blue-700 active:text-blue-900"
                        onClick={() => setOpen(false)}
                      />
                      <div className="flex flex-col gap-4 my-10">
                        <h2 className="text-center text-2xl text-blue-500">
                          KASBASS LIVE SUPPORT
                        </h2>
                        <p className="text-sm text-center">
                          Welcome to Kasbass Live Support. Please select the
                          communication method that is most convenient for you.
                        </p>
                        <div className="flex justify-center items-center bg-gray-200 p-10 my-3">
                          <div className="grid grid-cols-2 gap-10">
                            <div>
                              <a href="tel:+2348147603570" className="flex flex-col justify-center items-center    gap-3">
                                <AiOutlineMessage
                                className="cursor-pointer hover:bg-blue-800 active:bg-blue-900 p-3
                                bottom-20 right-4 h-16 w-16 text-blue-500 z-50 bg-white rounded-full"
                                onClick={() => setOpen(!open)}
                              />
                              <span className="text-gray-700">Live Call</span>
                              </a>
                            </div>
                            <div>
                              <a href="https://www.facebook.com/profile.php?id=100063464694068&mibextid=ZbWKwL" className="flex flex-col justify-center items-center gap-3">
                                <FaFacebookMessenger
                                className="cursor-pointer hover:bg-blue-800 active:bg-blue-900 p-3
                                bottom-20 right-4 h-16 w-16 text-blue-500 z-50 bg-white rounded-full"
                                onClick={() => setOpen(!open)}
                              />
                              <span className="text-gray-700">Facebook</span>
                              </a>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-3">
                              <IoLogoWhatsapp
                                className="cursor-pointer hover:bg-blue-800 active:bg-blue-900 p-3
                                bottom-20 right-4 h-16 w-16 text-blue-500 z-50 bg-white rounded-full"
                                onClick={() => setOpen(!open)}
                              />
                              <span className="text-gray-700">Whatsapp</span>
                            </div>
                            <div>
                              <a href=" https://www.instagram.com/invites/contact/?i=mi29glvkp6z6&utm_content=gwkaofn" target="_blank" rel="noreferrer" className="flex flex-col justify-center items-center gap-3">
                              <FaInstagram
                                className="cursor-pointer hover:bg-blue-800 active:bg-blue-900 p-3
                                bottom-20 right-4 h-16 w-16 text-blue-500 z-50 bg-white rounded-full"
                                onClick={() => setOpen(!open)}
                              />
                              <span className="text-gray-700">Instagram</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
