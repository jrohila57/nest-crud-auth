import { Injectable } from '@nestjs/common';
import { Env, envSchema } from './env';
import { config } from 'dotenv';
@Injectable()
export class EnvService {
  private readonly envConfig: Env;

  constructor() {
    const validatedEnvConfig = envSchema.parse(process.env);

    this.envConfig = validatedEnvConfig;
    config();
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
