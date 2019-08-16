import { Module } from '@nestjs/common';

import { ApiModule } from './Modules';

@Module({
  imports: [ApiModule],
})
export class AppModule {}
