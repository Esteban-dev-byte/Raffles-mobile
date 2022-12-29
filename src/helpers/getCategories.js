/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
export const getCategories = async () => {
  console.log('Entra al helper getCategories')
  let bearer_token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQYW5kYSIsImV4cCI6MTY3MjI3Mjg3OSwiaWF0IjoxNjcyMjM2ODc5fQ.HQfnB06703v58AYQ6rCHJzM3h_o8gBLIvObG1UrcR1U';
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearer_token}`
    }
  };

  let resp = fetch('http://192.168.1.172:8080/categories/getAll', requestOptions)
    .then(response => response.json())
    .then((json) => { 
      
     })
    .catch(error => console.error(error));

    console.log('Respuesta de la función: ', resp)

  return resp;
}
