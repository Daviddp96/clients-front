const API_URL = 'https://clients-back-lhoz.onrender.com';

const customerServices = {
    async getAll() {
        const response = await fetch(`${API_URL}/customers`, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'GET',
        }).then((response) => response.json()).catch((error) => {
            console.log(error);
        });
        return response;
    },

    async getOneById(id) {
        const response = await fetch(`${API_URL}/customers/${id}`, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'GET',
        }).then((response) => response.json()).catch((error) => {
            console.log(error);
        });
        return response;
    },

    async deleteOneById(id) {
        const response = await fetch(`${API_URL}/customers/${id}`, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'DELETE',
        }).then((response) => response.json()).catch((error) => {
            console.log(error);
        });
        return response;
    },

    async postOne(body) {
        const response = await fetch(`${API_URL}/customers`, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body),
        }).then((response) => response.json()).catch((error) => {
            console.log(error);
        });
        return response;
    }, 
}

export default customerServices;