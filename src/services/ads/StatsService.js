import AdsService from './AdsService';

const ENDPOINT = 'statistics';

export default class StatisticsServices extends AdsService {
    getMain() {
        return this.get(`${ENDPOINT}`);
    }
};