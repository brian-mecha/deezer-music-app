
import { render, screen } from '@testing-library/react';
import Artist from '../../components/Artist';

const testArtist = {
    "id": 14220655,
    "name": "Blakey",
    "link": "https://www.deezer.com/artist/14220655",
    "share": "https://www.deezer.com/artist/14220655?utm_source=deezer&utm_content=artist-14220655&utm_term=0_1660715219&utm_medium=web",
    "picture": "https://api.deezer.com/artist/14220655/image",
    "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/28dcab6879c19fe230170c6cb11e17ae/56x56-000000-80-0-0.jpg",
    "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/28dcab6879c19fe230170c6cb11e17ae/250x250-000000-80-0-0.jpg",
    "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/28dcab6879c19fe230170c6cb11e17ae/500x500-000000-80-0-0.jpg",
    "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/28dcab6879c19fe230170c6cb11e17ae/1000x1000-000000-80-0-0.jpg",
    "nb_album": 5,
    "nb_fan": 8753046,
    "radio": true,
    "tracklist": "https://api.deezer.com/artist/14220655/top?limit=50",
    "type": "artist"
}

test('renders corretly', () => {
    render(<Artist artist={testArtist}/>);
    const divElement = screen.getByText(/Blakey/i);
    expect(divElement).toBeInTheDocument();
});
