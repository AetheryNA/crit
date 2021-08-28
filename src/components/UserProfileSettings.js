import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import SettingsNavigation from './SettingsNavigation'
import SettingsProfileEdit from './SettingsProfileEdit'
import Settings from '../../public/img/icons/settings.svg'
import Plus from "../../public/img/icons/plus.svg"

const UserProfileSettings = ({ currentUser }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="user-profile-settings__button flex items-center justify-center ml-auto z-10" onClick={() => {setOpen(!open)}}>
        <Settings />
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" auto-reopen="true" className="fixed inset-0 overflow-hidden user-profile-settings" onClose={setOpen}>
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 right-0 max-w-full flex w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="relative w-screen flex flex-row">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="user-profile-settings__close absolute z-10">
                      <button onClick={() => setOpen(false)}>
                        <Plus />
                      </button>
                    </div>
                  </Transition.Child>

                  <SettingsNavigation />
                  
                  <div className="user-profile-settings__col user-profile-settings__col--1 h-full flex-col py-6 shadow-xl w-1/12 hidden md:flex">
                    <div className="user-profile-settings__close-col absolute">
                      <button onClick={() => setOpen(false)}>
                        <Plus />
                      </button>
                    </div>
                  </div>
                  <div className="user-profile-settings__col user-profile-settings__col--2 h-full flex flex-col py-6 shadow-xl w-3/12 hidden md:flex">
                    <ul className="mt-36">
                      <li> Personal Infomation </li>
                      <li> Privacy </li>
                      <li> Security </li>
                      <li> Notifications </li>
                      <li> Language </li>
                      <li> Terms & Services </li>
                    </ul>
                  </div>
                  <div className="user-profile-settings__col user-profile-settings__col--3 h-full flex flex-col py-6 shadow-xl w-full md:w-8/12">
                    <SettingsProfileEdit userDetails={currentUser}/>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default UserProfileSettings
