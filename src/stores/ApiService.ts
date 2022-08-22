import axios from 'axios';

export default class ApiService {
    apiUrl:string = 'https://mecha-deezer-api.herokuapp.com/api/v1/';

    getRequestConfig = async (path, method, config) => {
        const absolutePath = `${this.apiUrl}${path}`;
        const requestConfig = {
            ...config,
            method: method,
            url: absolutePath,
            crossdomain: true,
        };

        return requestConfig;
    };

    makeHttpCall = async (path, method = 'get', config = null) => {
        try {
            const requestConfig = await this.getRequestConfig(path, method, config);
            return axios(requestConfig);
        }
        catch (error:any) {
            error.message = `Couldn't make HTTP call. ${error.message}`;
            throw error;
        }
    };

    fetchTopArtists = async () => {
        const chart = await this.makeHttpCall('chart?limit=30&index=1');
        return chart.data;
    }

    fetchArtistById = async (artistId) => {
        const artist = await this.makeHttpCall(`artist?id=${artistId}`);
        return artist.data;
    }

    fetchArtisAlbums = async (artistId, currentPage) => {
        const albums = await this.makeHttpCall(`artist/albums?id=${artistId}&index=${currentPage}&limit=25`);
        
        return albums.data;
    }

    searchArtist = async (artistName:string) => {
        const artists = await this.makeHttpCall(`search?artist=${artistName}`);
        return artists.data.data;
    }

    fetchArtistTracks = async (artistId:string) => {
        const tracks = await this.makeHttpCall(`artist/tracks?limit=5&index=0s&id=${artistId}`)
        return tracks.data.data;
    }
}
