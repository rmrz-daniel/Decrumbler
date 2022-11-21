import Dexie from 'dexie';

export const db = new Dexie('Subnets');
db.version(12).stores({
  subnet: '++id, collection, name, subnet, vlan, vrf, gw, location, state',
  user: '++id, username, password'
});
