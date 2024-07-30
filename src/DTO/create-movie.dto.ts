export class CreateCourseDto {
  name: string;
  imageUrl?: string; // Optional field for image URL
  category: string;
  content: string;
  trailer: string; // Optional field for trailer URL
}
