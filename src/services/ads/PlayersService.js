import AdsService from './AdsService';

const ENDPOINT = 'players';

export default class PlayersService extends AdsService {
    getOne(id) {
        return this.get(`${ENDPOINT}/${id}`);
    }
};