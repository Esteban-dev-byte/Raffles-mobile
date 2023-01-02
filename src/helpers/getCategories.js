/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
export const getCategories = async () => {
  console.log('Entra al helper getCategories')
  let bearer_token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQYW5kYSIsImV4cCI6MTY3MjcxNzAxNywiaWF0IjoxNjcyNjgxMDE3fQ.4EiMdxQgyClTpM7RCvAZ5g6gTYYY2YQOrVevfD_c7sg';
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearer_token}`,
    }
  };

  let resp = await fetch('http://192.168.1.172:8080/categories/getAll', requestOptions);
  let json = await resp.json();
  console.log('resp:', resp);
  console.log('json:', json);

  return json;
}
