import moment from "moment";
import Badge from "./Badge";

const Album = ({album}) => (
    <a href={album.link} target="_blank" rel="noreferrer"  key={album.id}>
        <li className="relative shadow rounded-lg">
            <div className=" group block w-full aspect-w-10 aspect-h-7 rounded-t-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img src={album.cover_big} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                <button type="button" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">View details for {album.title}</span>
                </button>
            </div>
            <div className='px-2 pb-2 rounded-b-lg'>
                <p className="mt-2 block font-medium text-gray-900 truncate pointer-events-none">{album.title}</p>

                <div className="flex pt-1">
                    <p className="flex-1 block text-sm font-medium text-gray-500 pointer-events-none">{moment(album.release_date).format('YYYY')} &bull; {`${album.fans.toLocaleString()} Fans`}</p>
                    {album.explicit_lyrics && <Badge />}
                </div>
            </div>
        </li>
    </a>
)

export default Album;
