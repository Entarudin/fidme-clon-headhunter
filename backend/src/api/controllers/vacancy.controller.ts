import {
  Body,
  Controller,
  Param,
  Get,
  Put,
  Delete,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VacancyService } from 'src/core/services/vacancy.service';
import { Vacancy } from 'src/domain/vacancy/vacancy.schema';
import { CreateVacancyDto } from 'src/dtos/create-vacancy.dto';
import { NotFoundResponse } from 'src/dtos/types';

@Controller('vacancy')
@ApiTags('vacancy')
export class VacanciesController {
  constructor(private readonly vacancyService: VacancyService) {}

  @ApiOperation({ summary: 'Get vacancy on params' })
  @ApiResponse({
    status: 200,
    description: 'The vacancy will find successfully.',
    type: [Vacancy],
  })
  @ApiResponse({
    status: 404,
    description: 'Find vacancy error.',
    type: NotFoundResponse,
  })
  @Get(':id')
  getVacancyById(@Param('id') id: string) {
    return this.vacancyService.findById(id);
  }
  @ApiOperation({ summary: 'Get vacancies on params' })
  @ApiResponse({
    status: 200,
    description: 'The vacancies will find successfully.',
    type: [Vacancy],
  })
  @ApiResponse({
    status: 404,
    description: 'Find vacancies error.',
    type: NotFoundResponse,
  })
  @Get('/')
  getAllVacancies() {
    return this.vacancyService.findAll();
  }

  @ApiOperation({ summary: 'Update vacancy ' })
  @ApiResponse({
    status: 200,
    description: 'The vacancy will update successfully.',
    type: [Vacancy],
  })
  @ApiResponse({
    status: 404,
    description: 'Update vacancy error.',
    type: NotFoundResponse,
  })
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateVacancyDto) {
    return this.vacancyService.update(id, dto);
  }

  @ApiOperation({ summary: 'Delete vacancy ' })
  @ApiResponse({
    status: 200,
    description: 'The vacancy successfully deleted.',
    type: [Vacancy],
  })
  @ApiResponse({
    status: 404,
    description: 'Delete vacancy error.',
    type: NotFoundResponse,
  })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.vacancyService.delete(id);
  }

  @ApiOperation({ summary: 'Create vacancy ' })
  @ApiResponse({
    status: 200,
    description: 'The vacancy successfully Created.',
    type: [Vacancy],
  })
  @ApiResponse({
    status: 404,
    description: 'Create vacancy error.',
    type: NotFoundResponse,
  })
  @Post('/')
  create(@Body() dto: CreateVacancyDto) {
    return this.vacancyService.create(dto);
  }
}
