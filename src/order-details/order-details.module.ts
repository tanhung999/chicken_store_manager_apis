import { Module } from '@nestjs/common';
import { OrderDetailsController } from './order-details.controller';
import { OrderDetailsService } from './order-details.service';

@Module({
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService]
})
export class OrderDetailsModule {}
