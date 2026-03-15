import {ConfigModule} from '@nestjs/config';

export const EnvConfigModule = ConfigModule.forRoot({
    isGlobal: true, // 전역 모듈로 설정
    envFilePath: '.env', // 기본값이 .env 이지만 명시 가능
})