import {Injectable, NestInterceptor,Logger, CallHandler, ExecutionContext} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const className = context.getClass().name; // ✨ 실행 중인 클래스명 추출
    const methodName = context.getHandler().name; // ✨ 실행 중인 메서드명 추출

    this.logger.log(`${className}.${methodName} request`);
    return next.handle();
  }
}