import {
    makeObservable, observable, flow,
} from 'mobx';
import ApiService from '../ApiService';

class ArtistStore {
    apiService:ApiService
    artists:any = []
    artist:any
    searchResults:any = []
    artistTracks:any = []
    artistAlbums:any
    isFetchingTopArtists:boolean = false
    isFetchingArtist:boolean = false
    isSearchingArtist:boolean = false
    isFetchingAlbums:boolean = false

    constructor() {
        this.apiService = new ApiService();

        makeObservable(this, {
            artists: observable,
            artist: observable,
            searchResults: observable,
            artistTracks: observable,
            artistAlbums: observable,
            isFetchingTopArtists: observable,
            isFetchingArtist: observable,
            isSearchingArtist: observable,
            isFetchingAlbums: observable
        });

        this.getArtists();
    }

    getArtists = flow(function* (this:ArtistStore) {
        this.isFetchingTopArtists = true

        try {
            const artistsJson = yield this.apiService.fetchTopArtists();
            this.artists = artistsJson.artists.data;
            this.isFetchingTopArtists = false
        }
        catch (error:any) {
            console.error(`ArtistStore failed to load artists. ${error.message}`);
            this.isFetchingTopArtists = false;
        }
    });

    getArtistById = flow(function* (this:ArtistStore, artistId) {
        this.isFetchingArtist = true;

        try {
            const artistJson = yield this.apiService.fetchArtistById(artistId);
            
            this.artist = artistJson;
            this.isFetchingArtist = false
        }
        catch (error:any) {
            console.error(`ArtistStore failed to load artist. ${error.message}`);
            this.isFetchingArtist = false;
        }
    });

    getArtistAlbums = flow(function* (this:ArtistStore, artistId, currentPage) {
        this.isFetchingAlbums = true;

        try {
            const albumsJson = yield this.apiService.fetchArtisAlbums(artistId, currentPage);
            this.artistAlbums = albumsJson;
            this.isFetchingAlbums = false
        }
        catch (error:any) {
            console.error(`ArtistStore failed to load albums. ${error.message}`);
            this.isFetchingAlbums = false;
        }
    });

    getArtistsBySearch = flow(function* (this:ArtistStore, artistName) {
        this.isSearchingArtist = true;

        try {
            const artistsArr = yield this.apiService.searchArtist(artistName);
            
            this.searchResults = artistsArr;
            this.isSearchingArtist = false
        }
        catch (error:any) {
            console.error(`ArtistStore failed to search artist. ${error.message}`);
            this.isSearchingArtist = false;
        }
    });

    getArtistTracks = flow(function* (this:ArtistStore, artistId) {
        this.isFetchingArtist = true

        try {
            const tracksJson = yield this.apiService.fetchArtistTracks(artistId);
            this.artistTracks = tracksJson;
            this.isFetchingArtist = false
        }
        catch (error:any) {
            console.error(`ArtistStore failed to load artist's tracks. ${error.message}`);
            this.isFetchingArtist = false;
        }
    });
}

export default ArtistStore;
