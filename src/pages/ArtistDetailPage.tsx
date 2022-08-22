import { observer } from 'mobx-react';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { StoreContext } from '../stores/StoreProvider';
import Track from '../components/Track';
import Album from '../components/Album';
import Spinner from '../components/Spinner';
import useStateWithCallback from '../helpers/useStateWithCallback';
import Navigation from '../components/Navigation';

const ArtistDetailPage = () => {
    const {id} = useParams();
    const { store: { 
        artistStore
    } } = useContext(StoreContext);
    const {artist, artistAlbums, artistTracks, isFetchingAlbums } = artistStore;

    const fetchData = () => {
        artistStore.getArtistById(id);
        artistStore.getArtistTracks(id);
        artistStore.getArtistAlbums(id, currentIndex);
    }
    
    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    // PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const [albumsPerPage] = useState(25);
    const [currentIndex, setCurrentIndex] = useStateWithCallback(0);

    const indexOfLastRecord = currentPage * albumsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - albumsPerPage;
    const pageCount = artistAlbums && Math.ceil(artistAlbums.total / albumsPerPage)

    const nextPage = () => {        
        if (currentPage !== pageCount) {
            setCurrentPage(currentPage + 1);
            setCurrentIndex(indexOfLastRecord, (prevValue, newValue) => {
                artistStore.getArtistAlbums(id, newValue);
            });
        }
    }

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
            setCurrentIndex(indexOfFirstRecord - 25, (prevValue, newValue) => {
                artistStore.getArtistAlbums(id, newValue);
            });
        }
    }

    return (
        <div>
            {artistStore.isFetchingArtist ?
                <Spinner />
                :
                <div className="bg-white overflow-hidden">
                    {artist
                        ? <div className="relative max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                                <div>
                                    <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
                                        {artist && artist.name}
                                    </h3>
                                    <p className="pt-1 block  font-medium text-gray-500 pointer-events-none capitalize">
                                        {`${artist.type} • ${artist.nb_fan.toLocaleString()} fans • ${artist.nb_album.toLocaleString()} albums ${artist.radio && '• Available on Radio'}`}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                                <div className="relative lg:row-start-1 lg:col-start-1">
                                    <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                                        <figure>
                                            <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                                <img
                                                    className="rounded-lg shadow-lg object-cover object-center"
                                                    src={artist.picture_xl}
                                                    alt=""
                                                    width={1184}
                                                    height={1376}
                                                />
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                                <div className='mt-8 lg:mt-0'>
                                    <h1 className='text-2xl font-semibold md:pb-4 pb-2 '>Top Tracks</h1>
                                    {artistTracks && artistTracks.map(track => (
                                        <Track track={track} key={track.id}/>
                                    ))}
                                    {artistTracks && artistTracks.length < 1 && <div className='mx-auto py-6 px-4 w-full text-center text-gray-600 text-lg'>No tracks available for this artist</div>}
                                </div>
                            </div>

                            <div className='mt-8'>
                                <h1 className='text-2xl font-semibold md:pb-4 pb-4 mt-4 md:mt-0'>
                                    Albums <span className='text-gray-600 font-normal'>
                                        {`(${(artistAlbums && artistAlbums.total) || 0})`}
                                    </span>
                                </h1>
                                {!isFetchingAlbums && <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                                    {artistAlbums.data.map((album) => (
                                        <Album album={album} key={album.id} />
                                    ))}
                                </ul>}
                                {artistAlbums && artistAlbums.data.length < 1 && <div className='mx-auto py-6 px-4 w-full text-center text-gray-600 text-lg'>No tracks available for this artist</div>}
                            </div>

                            {pageCount > 1 && <Navigation pageCount={pageCount} prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} />}
                        </div>
                        : <div className='mx-auto py-6 px-4 w-full text-center text-gray-600 text-lg'>No artist to display. Try refreshing the page.</div>}
                </div>
            }
        </div>
    )
}

export default observer(ArtistDetailPage);
