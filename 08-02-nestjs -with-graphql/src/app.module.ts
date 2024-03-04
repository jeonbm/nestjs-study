import { Module } from '@nestjs/common';
import { BoardsModule } from './apis/boards/boards.module';
import { ProductsModule } from './apis/products/products.module';
import { UsersModule } from './apis/users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [BoardsModule,//
            ProductsModule,//
            UsersModule,//                 // 제네릭
            GraphQLModule.forRoot<ApolloDriverConfig>({ 
              driver:ApolloDriver,
              autoSchemaFile:"src/commons/graphql/schema.gql",
            })
           ],
  controllers: [],
  providers: [],
})
export class AppModule {}
