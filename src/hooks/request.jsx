
const URL = "https://api.nayuta.uz/api/v1";

// console.log(lang, 'lang');

export function PostData(endpoint, data, token) {
    return fetch(`${URL + endpoint}`, {
        method: 'POST',
        headers: {
            "Authorization": 'Bearer ' + token,
            "Accept": '*/*',
            // 'Content-type': 'multipart/form-data'
            // "Content-Type": "multipart/form-data",
            // "type": "formData"
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(res => res.json()
    )
}

export const getCarouselData = async () => {
    try {
        const response = await fetch(`${URL}/japanese-carousel/`);
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getJapaneeseProducts = async () => {
    try {
        const response = await fetch(`${URL}/japanese-product/`);
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getJapaneeseTeam = async () => {
    try {
        const response = await fetch(`${URL}/japanese-team/`);
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getJapaneesePdf = async () => {
    try {
        const response = await fetch(`${URL}/japanese-pdf/`);
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export function PutData(endpoint, data, token) {
    return fetch(`${URL + endpoint}`, {
        method: 'PUT',
        headers: {
            "Authorization": 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
}
export function PatchData(endpoint, data, token) {
    return fetch(`${URL + endpoint}`, {
        method: 'PATCH',
        headers: {
            "Authorization": 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
}

// const { lang } = useUserContext()
export function GetData(endpoint, lang) {
    return (
        fetch(`${URL + endpoint}`, {
            method: "GET",
            headers: {
                // "Authorization": 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // "Access-Control-Request-Headers": "*",
                "Accept-Language": lang
            },
        })
            .then((response) => {
                return response.json();
            }))
}