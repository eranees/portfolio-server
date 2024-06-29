import { Injectable } from '@nestjs/common';
import { AbstractApiResponse } from './utils/general-response';

@Injectable()
export class AppService {
  async getHello<T>(): Promise<AbstractApiResponse<T>> {
    const response = AbstractApiResponse.success(
      "Welcome to Anees's Portfolio Website" as T,
    );

    return response;
  }
}
