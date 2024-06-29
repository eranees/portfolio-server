import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AbstractApiResponse } from './utils/general-response';
import { ApiTags } from '@nestjs/swagger';

@Controller({
  path: 'App-Controller',
  version: '1',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('greeting')
  @Get()
  getHello<T>(): Promise<AbstractApiResponse<T>> {
    return this.appService.getHello();
  }
}
