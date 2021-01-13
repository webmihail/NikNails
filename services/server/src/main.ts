import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as moment from 'moment-timezone';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  moment.tz.setDefault('Europe/Kiev');

  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule, {
    // logger: Boolean(process.env.ENABLELOGGING),
    // logger: console,
  });

  app.enableCors();
  app.setGlobalPrefix('/api/v1');

  //Helmet can help protect your app from some well-known (https://github.com/helmetjs/helmet#how-it-works)
  app.use(helmet());

  //We need this because "cookie" is true in csrfProtection
  // app.use(cookieParser());
  // app.use(csurf({ cookie: true }));

  //To protect your applications from brute-force attacks
  app.use(
    new rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
    }),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      //Strip away all none-object existing properties
      whitelist: true,
      //Transform input objects to their corresponding DTO objects
      transform: true,
    }),
  );

  await app.listen(process.env.PORT || 3090);
  logger.log(`Server started running at ${await app.getUrl()}`);
}

bootstrap();
