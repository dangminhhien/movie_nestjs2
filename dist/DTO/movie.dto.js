"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = exports.MovieDto = void 0;
class MovieDto {
    constructor(movie) {
        this.name = movie.name;
        this.content = movie.category;
        this.image = movie.image;
        this.trailer = movie.trailer;
    }
}
exports.MovieDto = MovieDto;
class UserDto {
    constructor(user) {
        this.username = user.username;
    }
}
exports.UserDto = UserDto;
//# sourceMappingURL=movie.dto.js.map