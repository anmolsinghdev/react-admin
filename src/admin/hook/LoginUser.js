import { FetchCall } from './FetchCall';

export async function loginUser(credentials, callback) {
  FetchCall(
    'https://dummyjson.com/auth/login',
    {
      username: 'kminchelle',
      password: '0lelplR',
    },
    (response) => {
      callback(response);
    }
  );
}
