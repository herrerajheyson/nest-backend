import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/dtos/products/products.dtos';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly products: Repository<Product>,
  ) {}

  async findAll() {
    return await this.products.find();
  }

  async findOne(id: number) {
    const response = await this.products.findOne(id);
    if (!response) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return response;
  }

  async create(payload: CreateProductDto) {
    await this.products.insert(payload);
    return payload;
  }

  async update(id: number, payload: UpdateProductDto) {
    await this.products.update(id, payload);
    return {
      message: `Product ${id} updated`,
    };
  }

  async delete(id: number) {
    await this.products.delete(id);
    return {
      message: `Product ${id} deleted`,
    };
  }
}
