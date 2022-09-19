const axios = require('axios').default;

export async function getAllDeviceEvent(idDeviceEvent) {
    const response = await axios.get(`http://localhost:9000/rest/public/deviceEvent/all`);
    return response.data;
}

export async function getSingleDeviceEvent(idDeviceEvent) {
    const response = await axios.get(`http://localhost:9000/rest/public/deviceEvent/single?idDeviceEvent=${idDeviceEvent}`);
    return response.data;
}

export async function getSingleDeviceEventDetail(idDeviceEvent) {
    const response = await axios.get(`http://localhost:9000/rest/public/deviceEvent/single/detail?idDeviceEvent=${idDeviceEvent}`);
    return response.data;
}

export async function upsertDeviceEventAction(data) {
    const response = axios.post('http://localhost:9000/rest/public/deviceEvent/upsert', data);
    return response.data;
}

