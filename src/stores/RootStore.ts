import { configure } from 'mobx';
import ApiService from './ApiService';
import ArtistStore from './Artist/ArtistStore';

configure({ enforceActions: 'observed' });

export default class RootStore {
    apiService: ApiService;
    artistStore:ArtistStore

    constructor() {
        this.apiService = new ApiService();
        this.artistStore = new ArtistStore();
    }
}
