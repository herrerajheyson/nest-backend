import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from 'src/service/products/products.service';
import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/dtos/products/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  index() {
    return this.productsService.findAll();
  }

  @Get(':id')
  show(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post('store')
  store(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(id, payload);
  }

  @Delete('delete/:id')
  destroy(@Param() params: any) {
    return this.productsService.delete(+params.id);
  }
}
