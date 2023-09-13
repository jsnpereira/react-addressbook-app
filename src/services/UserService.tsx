
const USER_BASE_URL = "http://localhost:3001/api/users/";

export default class UserService {
    handleError = (error:any) => {
        if (error === undefined || error.response === undefined) {
            throw new Error("Server error");
        } else {
            throw new Error(error.response.data.message);
        }
    };

    getHeader = () => {
        let config = {
            Headers: {
                "cache-Control": "no-cache",
                "Accept-Language": "en",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        };
        return config;
    };

    createNewUser(user: any){
       return fetch(USER_BASE_URL +'signup', {method: 'POST',
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                password: user.password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    signIn(user: any){
         return fetch(USER_BASE_URL +'signin', {method: 'POST',
            body: JSON.stringify({
                email: user.username,
                password: user.password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then( response => response.json())
    }
}