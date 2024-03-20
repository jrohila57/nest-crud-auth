import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants/index';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      try {
        switch (process.env.NODE_ENV) {
          case DEVELOPMENT:
            config = databaseConfig.development;
            break;
          case TEST:
            config = databaseConfig.test;
            break;
          case PRODUCTION:
            config = databaseConfig.production;
            break;
          default:
            config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);
        sequelize.addModels([]);
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
        return sequelize;
      } catch (error: any) {
        console.error('Unable to connect to the database:', error);
      }
    },
  },
];
