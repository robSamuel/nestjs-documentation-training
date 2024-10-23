export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class UpdateCatDto {
  id: number;
  name: string;
  age: number;
  breed: string;
}

export class ListAllEntities {
  id: number;
  name: string;
  age: number;
  breed: string;
}
