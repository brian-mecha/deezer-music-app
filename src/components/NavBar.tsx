import { Disclosure } from '@headlessui/react';
import { SearchIcon, CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { useContext, useEffect, useState } from 'react'
import { Combobox } from '@headlessui/react'
import { observer } from 'mobx-react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { debounce } from 'lodash';
import { StoreContext } from '../stores/StoreProvider';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
    const [query, setQuery] = useState('');
    const [selectedPerson, setSelectedPerson] = useState();
    const { store: { artistStore } } = useContext(StoreContext);
    const history = useHistory();
    const location = useLocation();

    const searchArtists = debounce(async() => {
        if (query.trim() === '') {
            return
        }
        await artistStore.getArtistsBySearch(query.trim());
    }, 200);

    useEffect(() => {
        searchArtists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    const viewArtist = (artistId:string) => {
        if (location.pathname.includes('artist')) {
            history.replace(`/${artistId}`);
        }
        history.replace(`artist/${artistId}`);
    }

    return (
        <Disclosure as="header" className="bg-white shadow sticky top-0 z-50">
            <>
                <div className=" mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
                    <div className="relative h-16 flex justify-between">

                        <Link to='/' className="text-2xl font-semibold pt-4 text-indigo-600">
                            DEEZER
                        </Link>

                        <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson} className="w-full">
                            <div className="relative mt-3 ml-2 md:ml-14 sm:max-w-xs ">
                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <Combobox.Input
                                    className="block w-full rounded-full border border-gray-300 bg-white py-2 pl-10 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                    onChange={(event) => setQuery(event.target.value)}
                                    displayValue={(artist:any) => artist?.name}
                                    placeholder="Search Artists"
                                />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Combobox.Button>

                                {artistStore.searchResults.length > 0 && (
                                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {artistStore.searchResults.map((artist) => (
                                            <Combobox.Option
                                                key={artist.id}
                                                value={artist}
                                                className={({ active }) =>
                                                    classNames(
                                                        'relative cursor-pointer select-none py-2 pl-3 pr-9',
                                                        active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                                    )}
                                            >
                                                {({ active, selected }) => (
                                                    <div onClick={() => viewArtist(artist.id)}>
                                                        <div className="flex items-center">
                                                            <img src={artist && artist.picture_small} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" loading='lazy'/>
                                                            <span className={classNames('truncate ml-2', selected && 'font-semibold')}>{artist.name}</span>
                                                            <span
                                                                className={classNames(
                                                                    'ml-1 truncate text-gray-500',
                                                                    active ? 'text-indigo-200' : 'text-gray-500'
                                                                )}
                                                            >
                                                                {`(${artist && artist.nb_fan.toLocaleString()} fans)`}
                                                            </span>
                                                        </div>

                                                        {selected && (
                                                            <span
                                                                className={classNames(
                                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                    active ? 'text-white' : 'text-indigo-600'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                            </Combobox.Option>
                                        ))}
                                    </Combobox.Options>
                                )}
                            </div>
                        </Combobox>

                    </div>
                </div>
            </>
        </Disclosure>
    );
}

export default observer(NavBar);
