import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from "@heroicons/react/solid";

const Navigation = ({prevPage, nextPage, pageCount, currentPage}) => (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 mt-3">
        <div className="-mt-px w-0 flex-1 flex">
            <span
                className="cursor-pointer border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                onClick={prevPage}
            >
                <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                Previous
            </span>
        </div>
        <div className=" mt-4">
            <p className="text-sm text-gray-700">
                <span className='hidden md:block'>Showing <span className="font-medium">{currentPage}</span> of{' '}
                    <span className="font-medium">{pageCount}</span> pages
                </span>
                <span className='md:hidden'>
                    <span className="font-medium">{currentPage}</span>/
                    <span className="font-medium">{pageCount}</span>
                </span>
            </p>
        </div>
        <div className="-mt-px w-0 flex-1 flex justify-end">
            <button
                className="cursor-pointer border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                onClick={nextPage}
            >
                Next
                <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            </button>
        </div>
    </nav>
);

export default Navigation;
