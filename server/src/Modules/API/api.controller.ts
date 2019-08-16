import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
	constructor(private readonly apiService: ApiService) {}

	@Get('items')
	async search(@Query('q') query: string, @Query('limit') limit: number): Promise<any> {
		return await this.apiService.search(query, limit || 4);
	}

	@Get('items/:id')
	async productDetails(@Param('id') id: string): Promise<any> {
		return await this.apiService.productDetails(id);
	}
}
