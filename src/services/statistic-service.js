

export default class StatisticService {

    async sendData (url, data) {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "json=" + JSON.stringify(data)});
        const body = await res.json();
        return body;
    }


    async getStatistic(url, data) {
        const body = await this.sendData(url, data).then(data => data);
        return body;
    }

    async getUserInfo(url, data) {
        const body = await this.sendData(url, data).then(data => data);
        return body;
    }

}