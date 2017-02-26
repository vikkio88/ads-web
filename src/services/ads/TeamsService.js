import AdsService from './AdsService';

const ENDPOINT = 'teams';

export default class TeamsService extends AdsService {
    getOne(id) {
        return this.get(`${ENDPOINT}/${id}`);
    }
    getOneWithRoster(id) {
        return this.get(`${ENDPOINT}/${id}/roster`);
    }
    getOneWithMatches(id) {
        return this.get(`${ENDPOINT}/${id}/matches`);
    }
    getAll() {
        return this.get(`${ENDPOINT}`);
    }
};