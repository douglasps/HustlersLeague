class IpService{

    static getIp(){
        return new Promise(resolve => $.getJSON('https://freegeoip.net/json/?callback=?', data => resolve(data.ip)));
    }
}