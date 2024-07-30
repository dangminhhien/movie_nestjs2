"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = exports.MovieDto = exports.LocalDto = void 0;
class LocalDto {
    constructor(local) {
        this.localName = local.localName;
        this.local = local.local;
        this.image = local.image;
        this.map = local.map;
    }
}
exports.LocalDto = LocalDto;
class MovieDto {
    constructor(movie) {
        this.name = movie.name;
    }
}
exports.MovieDto = MovieDto;
class UserDto {
    constructor(user) {
        this.username = user.username;
    }
}
exports.UserDto = UserDto;
//# sourceMappingURL=local.dto.js.map