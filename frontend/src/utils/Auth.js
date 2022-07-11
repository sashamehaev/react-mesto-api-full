export const BASE_URL = 'https://auth.nomoreparties.co';

function getResponse(res) {
  if (res.ok) {
      return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "password": password,
        "email": email
    })
  })
  .then((response) => {
    return getResponse(response);
  })
  .then((res) => {
    return res;
  });
};

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "password": password,
        "email": email
      })
    })
    .then((response => getResponse(response)))
    .then((data) => {
      if (data) {
        localStorage.setItem('jwt', data.token);
        return data;
      } 
    });
  };

  export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => getResponse(res))
    .then(data => data)
  }
