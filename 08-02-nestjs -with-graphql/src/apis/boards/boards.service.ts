import { Injectable } from '@nestjs/common';

// 인젝션 스코프 => 1.싱글톤(new 한번)
//                 2.Request 스코프(매 요청마다 new)로 할래?
//                 3.Transitent 스코프 ( 매 주입마다 new)로 할래?

// 싱글톤으로 할것이라 Injectable 데커레이션이 없어도 , 파라미터값이 없어도 , Injectable({scope:Scope.DEFAULT}) 를 해도 싱글톤
@Injectable()
export class BoardsService {
    test(): string{
        return "";
    }
}
