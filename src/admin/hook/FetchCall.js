import * as API from '../../constants/APIconstants';

export async function FetchCall(url, body, callback) {
  const data = {
    body: JSON.stringify(body),
    method: API.APIFetchMethods.POST,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(url, data);
  const jsonData = await response.json();
  return callback(jsonData);
}
