export class LocalDto {
  readonly localName: string;
  readonly local: string;
  readonly image: string;
  readonly map: string;

  constructor(local: any) {
    this.localName = local.localName;
    this.local = local.local;
    this.image = local.image;
    this.map = local.map;
  }
}

export class MovieDto {
  readonly name: string;

  constructor(movie: any) {
    this.name = movie.name;
  }
}
export class UserDto {

  readonly username: string;

  constructor(user: any) {
    this.username = user.username;
  }
}
