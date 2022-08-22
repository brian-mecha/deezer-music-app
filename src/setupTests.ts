// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('./stores/Artist/ArtistStore', () => {
    return jest.fn().mockImplementation(() => {
        return {
            searchResults: [{
                "id": 4288978,
                "name": "Eminem, Royce",
                "link": "https://www.deezer.com/artist/4288978",
                "picture": "https://api.deezer.com/artist/4288978/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg",
                "nb_album": 0,
                "nb_fan": 1256,
            }],
            artists: [{
                id: 246791,
                link: "https://www.deezer.com/artist/246791",
                name: "Drake",
                picture: "https://api.deezer.com/artist/246791/image",
                picture_big: "https://e-cdns-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/500x500-000000-80-0-0.jpg",
                picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/250x250-000000-80-0-0.jpg",
                picture_small: "https://e-cdns-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/56x56-000000-80-0-0.jpg",
                picture_xl: "https://e-cdns-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/1000x1000-000000-80-0-0.jpg",
                position: 2,
                radio: true,
                tracklist: "https://api.deezer.com/artist/246791/top?limit=50",
                type: "artist",
            }],
            artistTracks: [{
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
            }],
            artist: {
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
            },
            artistAlbums: {
                total: 1,
                data: [
                    {
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
                        "explicit_lyrics": true,
                        "type": "album"
                    }
                ]},     
            getArtistTracks: jest.fn(),
            getArtistAlbums: jest.fn(),
            getArtistById: jest.fn(),
            getArtistsBySearch: jest.fn(),
        }
    })
})
