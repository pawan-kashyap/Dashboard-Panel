const BASEURL = "http://localhost:8080/api/v1";
const API_ENDPOINTS = {
    ROLE:{
        CREATE: BASEURL + '/role',
        DELETE: BASEURL + '/role',
        GET: BASEURL + '/role',
        GETALL: BASEURL + '/roles',
        UPDATE: BASEURL + '/role'   
    },
    PRODUCT:{
        CREATE: BASEURL + '/product',
        DELETE: BASEURL + '/product',
        GET: BASEURL + '/product',
        GETALL: BASEURL + '/products',
        UPDATE: BASEURL + '/product'   
    },
    USER:{
        REGISTER: BASEURL + '/auth/register',
        LOGIN: BASEURL + '/auth/login',
        CREATE: BASEURL + '/user',
        DELETE: BASEURL + '/user',
        GET: BASEURL + '/user',
        GETME: BASEURL + 'user/me',
        GETALL: BASEURL + '/users',
        UPDATE: BASEURL + '/user'    
    }
}
module.exports ={
    API_ENDPOINTS,
    BASEURL
}