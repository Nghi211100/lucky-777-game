import { Dispatch, Fragment, ReactNode, SetStateAction, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function Modal({
  open,
  setOpen,
  handleOnClick,
  children,
  title,
  buttonName,
  loading,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleOnClick?: () => void;
  children: ReactNode;
  title: string;
  buttonName?: string;
  loading?: boolean;
}) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[880px]">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="w-full sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <InformationCircleIcon
                        className="h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-xl text-center font-bold leading-6 text-gray-900"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="mt-4 text-neutral-900">{children}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex justify-center gap-6">
                  <button
                    type="button"
                    className={
                      "bg-[#E53535] cursor-pointer rounded-lg px-4 py-2.5 text-white font-bold"
                    }
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Đóng
                  </button>
                  {buttonName && (
                    <button
                      type="button"
                      className={clsx(
                        "bg-[#08CF7C] hover:bg-[#009937]",
                        "rounded-lg",
                        "px-7 py-2.5",
                        "cursor-pointer",
                        "text-white font-bold",
                        "min-w-[140px]",
                        "flex justify-center items-center"
                      )}
                      onClick={handleOnClick}
                      ref={cancelButtonRef}
                    >
                      {!loading ? (
                        buttonName
                      ) : (
                        <span className={clsx(loading && "animate-spin")}>
                          <ArrowPathIcon width={16} height={16} />
                        </span>
                      )}
                    </button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
