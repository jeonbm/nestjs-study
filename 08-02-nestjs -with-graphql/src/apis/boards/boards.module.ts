import { Module } from '@nestjs/common';
import { BoardsResolver } from './boards.resolver';
import { BoardsService } from './boards.service';

@Module({
  imports:[],
  providers: [BoardsResolver, // 주석으로 입력을 해야 prettierrc 기능이 작동을 안한다.
              BoardsService,
  ]
})
export class BoardsModule {}
