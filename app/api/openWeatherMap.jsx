var axios = require('axios');
//var apiKey = 'cb0003cccc2bd43818d02421f323886a';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=cb0003cccc2bd43818d02421f323886a';

module.exports = {
    getTemp: function (location){
        
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            
            if (res.data.cod && res.data.message) {
                //console.log(res);
                throw new Error(res.data.message +' ' + res.data.cod);

            }else {
                return res.data.main.temp;

            }

        }, function (res){
            
            throw new Error(res);
            
        });

    

    }
}