var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var inputBox = document.querySelector(".input-box");
var searchBtn = document.querySelector("#searchBtn");
var weather_img = document.querySelector(".weather-img");
var temperature = document.querySelector(".temperature");
var description = document.querySelector(".description");
var humidity = document.querySelector(" #humidity");
var wind_speed = document.querySelector(" #wind-speed");
var weather_body = document.querySelector(".weather-body");
function cheackWeather(city) {
    return __awaiter(this, void 0, void 0, function () {
        var api_key, url, weather_data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api_key = "934e2c11d1839a633883079306e072a7";
                    url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(api_key);
                    return [4 /*yield*/, fetch("".concat(url)).then(function (response) { return response.json(); })];
                case 1:
                    weather_data = _a.sent();
                    weather_body.style.display = "flex";
                    temperature.innerHTML = "".concat(Math.round(weather_data.main.temp - 273.15), "\u00B0C");
                    description.innerHTML = "".concat(weather_data.weather[0].description);
                    humidity.innerHTML = "".concat(weather_data.main.humidity, "%");
                    wind_speed.innerHTML = "".concat(weather_data.wind.speed, " Km/H");
                    switch (weather_data.weather[0].main) {
                        case "Clouds":
                            weather_img.src = "assets/cloud.png";
                            break;
                        case "Clear":
                            weather_img.src = "assets/clear.png";
                            break;
                        case "Rain":
                            weather_img.src = "assets/rain.png";
                            break;
                        case "Mist":
                            weather_img.src = "assets/mist.png";
                            break;
                        case "Snow":
                            weather_img.src = "assets/snow.png";
                            break;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
searchBtn.addEventListener("click", function () {
    cheackWeather(inputBox.value);
});
