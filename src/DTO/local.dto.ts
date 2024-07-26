export class LocalDto {
    readonly namelocal: string;
    readonly local: string;
    readonly imagelo: string;
    readonly map: string;
  
    constructor(local: any) {
      this.namelocal = local.namelocal;
      this.local = local.local;
      this.imagelo = local.imagelo;
      this.map = local.map;
    }
  }
  
  export class UserDto {
    readonly username: string;
  
    constructor(user: any) {
      this.username = user.username;
    }
  }