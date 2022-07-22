class Api {
    constructor({ baseUrl, headers, renderCards }) {
        this._baseUrl = baseUrl;
        this._renderCards = renderCards;
    }

    _getResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                return this._getResponse(res);
            });
    }

    getInitialsCard(token) {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                return this._getResponse(res);
            });
    }

    setUserInfo(item, token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then((res) => {
                return this._getResponse(res);
            });
    }

    addCard(item, token) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then((res) => {
                return this._getResponse(res);
            });
    }

    deleteCard(cardId, token) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
            .then((res) => {
                return this._getResponse(res);
            });
    }

    changeLikeCardStatus(cardId, isLiked, token) {
        if (isLiked) {
            return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            })
                .then((res) => {
                    return this._getResponse(res);
                });
        } else {
            return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            })
                .then((res) => {
                    return this._getResponse(res);
                });
        }

    }

    setAvatar(url, token) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: url
            })
        })
        .then((res) => {
            return this._getResponse(res);
        });
    }
}

export const api = new Api({
    baseUrl: 'https://api.sashamehaev-mesto.nomoredomains.xyz',
    headers: {
        'Content-Type': 'application/json',
    }
});