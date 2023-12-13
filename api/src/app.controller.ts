import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('compile')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  compileCode(@Req() request: Request): string {
    // console.log(request.body.data);

    const {
      body: { data },
    } = request;

    const result = eval(data.typed_func)();

    if (result !== 'Hello World') {
      return 'Failed';
    }

    return 'Passed';

    // return this.appService.getHello();
  }
}
