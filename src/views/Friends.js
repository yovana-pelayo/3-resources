import { checkError, client } from '../services/Friends/client';

export default async function getFriends() {
  const resp = await client.from('friends').select('*');
  return checkError(resp);
}
