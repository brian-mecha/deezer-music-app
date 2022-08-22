import { observer } from 'mobx-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import Artist from '../components/Artist';
import Spinner from '../components/Spinner';

import { StoreContext } from '../stores/StoreProvider'

const HomePage = () => {
    const { store: { artistStore } } = useContext(StoreContext);

    return (
        <>
            <div className='mt-1 bg-white'>
                {artistStore.isFetchingTopArtists 
                    ? <Spinner /> 
                    : <div className="relative mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <div className='text-center text-3xl font-semibold mb-6'>Top Artists</div>
                        <ul className={`grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6`}>
                            {artistStore.artists.map(artist => (
                                <Link to={`artist/${artist.id}`} key={artist.id}>
                                    <Artist artist={artist} />
                                </Link>
                            ))}
                        </ul>
                    </div>}
            </div>
        </>
    )
}

export default observer(HomePage);
