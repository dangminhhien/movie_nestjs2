export class LocalDto {
    readonly namelo: string;
    readonly local: string;
    readonly imagelo: string;
    readonly map: string;
  
    constructor(local: any) {
      this.namelo = local.namelo;
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