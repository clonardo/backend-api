import { Module } from '@nestjs/common';
import { ConfigService } from './config-service';

/**
 * Common module with shared utils for rest of the app
 */
@Module({
    providers: [
        {
            provide: ConfigService,
            // useValue: new ConfigService(`${process.env.NODE_ENV}.env`)
            useValue: new ConfigService(`.env`)
        }
    ],
    exports: [ConfigService]
})
export class CommonModule {}
