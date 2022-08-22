
import { render, screen } from '@testing-library/react';
import Track from '../../components/Track';

const testTrack = {
    "id": 116348656,
    "readable": true,
    "title": "Let It Be (Remastered 2009)",
    "title_short": "Let It Be",
    "title_version": "(Remastered 2009)",
    "link": "https://www.deezer.com/track/116348656",
    "duration": 243,
    "rank": 860749,
    "explicit_lyrics": false,
    "explicit_content_lyrics": 0,
    "explicit_content_cover": 0,
    "preview": "https://cdns-preview-e.dzcdn.net/stream/c-e7e6e2142422aa4599294dee57197be9-13.mp3",
}

test('renders corretly', () => {
    render(<Track track={testTrack}/>);
    const divElement = screen.getByText(/Let It Be/i);
    expect(divElement).toBeInTheDocument();
});
