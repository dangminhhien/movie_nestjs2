export class CoursesDto {
    readonly name: string;
    readonly content: string;
    readonly image: string;
    readonly trailer: string;
  
    constructor(course: any) {
      this.name = course.name;
      this.content = course.category;
      this.image = course.image;
      this.trailer = course.trailer;
    }
  }
  
  export class UserDto {
    readonly username: string;
  
    constructor(user: any) {
      this.username = user.username;
    }
  }
  