import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot() {
    return {
      message: 'Juris Bootstrap v521 API',
      version: process.env.COMMIT_SHA || 'dev',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('version')
  getVersion() {
    return {
      version: process.env.COMMIT_SHA || 'dev',
      environment: process.env.NODE_ENV || 'development',
    };
  }
}
