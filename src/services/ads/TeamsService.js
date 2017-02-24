import AdsService from './AdsService';

const ENDPOINT = 'teams';

export default class TeamsService extends AdsService {
    getOne(id) {
        return this.get(`${ENDPOINT}/${id}`);
    }
    getAll() {
        return this.get(`${ENDPOINT}`);
    }
};