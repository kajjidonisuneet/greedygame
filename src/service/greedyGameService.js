import http from "./httpService";

const apiEndpoint = 'http://go-dev.greedygame.com/v3/dummy/';

//test this function 
export function getApp() {
    return http.get(apiEndpoint+'apps')
}

//test this function
export function getReport(startDate, endDate) {
    return http.get(apiEndpoint+`report?startDate=${startDate}&endDate=${endDate}`)
}

