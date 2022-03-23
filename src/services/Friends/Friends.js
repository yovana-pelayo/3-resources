import { checkError, client } from './client';

export default async function getFriends() {
  const resp = await client.from('friends').select('*');
  return checkError(resp);
}
