const axios = require('axios').default;
const URL_SERVER = process.env.REACT_APP_URL_SERVER;

export async function getAllDeviceEvent(idDeviceEvent) {
    const response = await axios.get(URL_SERVER+`/rest/public/deviceEvent/all`);
    return response.data;
}

export async function getSingleDeviceEvent(idDeviceEvent) {
    const response = await axios.get(URL_SERVER+`/rest/public/deviceEvent/single?idDeviceEvent=${idDeviceEvent}`);
    return response.data;
}

export async function getSingleDeviceEventDetail(idDeviceEvent) {
    const response = await axios.get(URL_SERVER+`/rest/public/deviceEvent/single/detail?idDeviceEvent=${idDeviceEvent}`);
    return response.data;
}

export async function upsertDeviceEventAction(data) {
    const response = axios.post(URL_SERVER+'/rest/public/deviceEvent/upsert', data);
    return response.data;
}

