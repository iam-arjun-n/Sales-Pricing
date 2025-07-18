using com.deloitte.mdg as db from '../db/data';

service MaterialService {
  entity Material as projection on db.Material;
}
    