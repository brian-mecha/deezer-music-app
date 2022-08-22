const Artist = ({artist}) => (
    <li className="col-span-1 bg-white cursor-pointer" key={artist.id}>
        <div className="group relative ">
            {/* aspect-w-10 aspect-h-5  */}
            <div className="w-full object-cover aspect-auto overflow-hidden">
                <img loading='lazy' src={artist.picture_big} alt="" className="object-cover pointer-events-none group-hover:opacity-75 rounded-lg shadow" />
            </div>
            <div className="absolute w-full py-2.5 bottom-0 inset-x-0 text-white font-bold text-xl leading-4 pl-3">{artist.name}</div>
        </div>
    </li>
)

export default Artist;
