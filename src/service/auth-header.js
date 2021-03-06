function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.accessToken) {
        // return {Authorization: 'Bearer' + user.accessToken}
        console.log('user', user.accessToken)
        return { "x-access-token" : user.accessToken }
    } else {
        return {}
    }
}

export default authHeader;
