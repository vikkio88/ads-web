import AdsService from './AdsService';

const ENDPOINT = 'leagues';

export default class TeamsService extends AdsService {
    getAll() {
        return this.get(`${ENDPOINT}`);
    }
    getOne(id) {
        return this.get(`${ENDPOINT}/${id}`);
    }
    getOneRound(id, roundId) {
        return this.get(`${ENDPOINT}/${id}/rounds/${roundId}`);
    }
};