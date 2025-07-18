namespace com.deloitte.mdg;

entity Material {
  key ID         : UUID;
      name       : String;
      category   : String;
      isActive   : Boolean default true;
      createdAt  : Timestamp;
}
