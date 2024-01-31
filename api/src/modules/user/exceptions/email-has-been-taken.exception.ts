import { HttpException } from '@nestjs/common';

export class EmailHasBeenTakenException extends HttpException {
  constructor() {
    super('This email has been taken, please choose another one', 422);
  }
}
