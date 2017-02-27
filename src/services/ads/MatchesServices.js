import AdsService from './AdsService';

const ENDPOINT = 'matches';

export default class MatchesServices extends AdsService {
    getOne(id) {
        return this.get(`${ENDPOINT}/${id}`);
    }
};