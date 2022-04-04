interface API {
    url: string;
    endpoint: string;
    method: `POST` | `PUT` |`GET` | `DELETE`
    body: string;
}


export const api = ():Promise<any> => {

    return new Promise((resolve)=>resolve(true))
}