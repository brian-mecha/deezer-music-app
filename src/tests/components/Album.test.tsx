
import { render, screen } from '@testing-library/react';
import Album from '../../components/Album';

const testAlbum = {
    "id": 294609352,
    "title": "Homework (25th Anniversary Edition)",
    "link": "https://www.deezer.com/album/294609352",
    "cover": "https://api.deezer.com/album/294609352/image",
    "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/56x56-000000-80-0-0.jpg",
    "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/250x250-000000-80-0-0.jpg",
    "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/500x500-000000-80-0-0.jpg",
    "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/1000x1000-000000-80-0-0.jpg",
    "md5_image": "117dcf85bdf0851347403796521d1e9d",
    "genre_id": 113,
    "fans": 7549,
    "release_date": "1997-01-20",
    "record_type": "album",
    "tracklist": "https://api.deezer.com/album/294609352/tracks",
    "explicit_lyrics": false,
    "type": "album"
}

test('renders corretly', () => {
    render(<Album album={testAlbum} />);
    const divElement = screen.getByText(/1997/i);
    expect(divElement).toBeInTheDocument();
});
