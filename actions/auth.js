const { API } = require("../config");
const fetch = require("isomorphic-fetch");
const cookie = require('js-cookie')
import Router from 'next/router';

export const handleResponse = response => {
    if (response.status === 401) {
        signout(() => {
            Router.push({
                pathname: '/signin',
                query: {
                    message: 'Your session is expired. Please signin'
                }
            });
        });
    }
};


export const preSignup = user => {
    return fetch(`${API}/pre-signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const signup = (user) => {
    console.log(user)
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

export const signin = (user) => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

export const signout = (next) => {
    removeCookie('token')
    removeLocalStorage('user')
    next()

    return fetch(`${API}/signout`, {
        method: 'GET'
    }).then(response => {
        console.log('signout success')
    }).catch(err => console.log(err))
}

export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1
        })
    }
}

export const removeCookie = (key) => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        })
    }
}

export const getCookie = (key) => {
    if (process.browser) {
        return cookie.get(key)
    }
}

export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export const removeLocalStorage = (key) => {
    if (process.browser) {
        localStorage.removeItem(key)
    }
}

export const authenticate = (data, next) => {
    setCookie('token', data?.token)
    setLocalStorage('user', data?.user)
    next()
}

export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token')
        if (cookieChecked) {
            if (localStorage.getItem('user') != undefined) {
                return JSON.parse(localStorage.getItem('user'))
            } else {
                return false
            }
        }
    }
}


export const updateUser = (user, next) => {
    if (process.browser) {
        if (localStorage.getItem('user') != undefined) {
            let auth = JSON.parse(localStorage.getItem('user'));
            auth = user;
            localStorage.setItem('user', JSON.stringify(auth));
            next();
        }
    }
};

export const forgotPassword = email => {
    return fetch(`${API}/forgot-password`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(email)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const resetPassword = resetInfo => {
    return fetch(`${API}/reset-password`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resetInfo)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const loginWithGoogle = user => {
    return fetch(`${API}/google-login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


// exports.


// exports.signup = (user) => {
//     return fetch(`${API}/signup`, {
//         method: "POST",
//         headers: {
//             Accept: 'application/json',
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(user)
//     }).then(response => {
//         return response.json()
//     }).catch(err => console.log(err))
// }

// exports.signin = (user) => {
//     return fetch(`${API}/signin`, {
//         method: "POST",
//         headers: {
//             Accept: 'application/json',
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(user)
//     }).then(response => {
//         return response.json()
//     }).catch(err => console.log(err))
// }

// exports.signout = (next) => {
//     cookie.remove('token', {
//         expires: 1
//     })
//     localStorage.removeItem('user')
//     next()

//     return fetch(`${API}/signout`, {
//         method:'GET'
//     }).then(response => {
//         console.log('signout success')
//     }).catch(err=> console.log(err))
// }

// exports.setCookie = (key, value) => {
//     if (process.browser) {
//         cookie.set(key, value, {
//             expires: 1
//         })
//     }
// }

// exports.removeCookie = (key) => {
//     if (process.browser) {
//         cookie.remove(key, {
//             expires: 1
//         })
//     }
// }

// exports.getCookie = (key) => {
//     if (process.browser) {
//         return cookie.get(key)
//     }
// }

// exports.setLocalStorage = (key, value) => {
//     if (process.browser) {
//         localStorage.setItem(key,JSON.stringify(value))
//     }
// }

// exports.removeLocalStorage = (key) => {
//     if (process.browser) {
//         localStorage.removeItem(key)
//     }
// }

// exports.authenticate = (data, next) => {
//     cookie.set('token', data?.token, {
//         expires: 1
//     })
//     localStorage.setItem('user',data?.user)
//     next()
// }

// exports.isAuth = () => {
//     if (process.browser) {
//         const cookieChecked = cookie.get('token')
//         if (cookieChecked) {
//             if (localStorage.getItem('user')) {
//                 return JSON.parse(JSON.stringify(localStorage.getItem('user')))
//             } else {
//                 return false
//             }
//         }
//     }
// }