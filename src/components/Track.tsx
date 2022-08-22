import format from 'format-duration';
import ReactAudioPlayer from 'react-audio-player';
import Badge from './Badge';

const Track = ({track}) => (
    <div>
        <div className="py-2 sm:grid sm:grid-cols-2 sm:gap-4 mb-1">
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 pr-2 mb-1">
                {track.title} 
                <span className='text-gray-900 px-1'>•</span>
                <span className='text-gray-500'>{format(track.duration * 1000)}</span>
                {track.explicit_lyrics && <><span className='text-gray-500 px-1'>•</span><Badge /></>}
            </div>
            <ReactAudioPlayer
                src={track.preview}
                autoPlay={false}
                controls
            />
        </div>
        <hr />
    </div>
)

export default Track;
