import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { FlashsaleItemsService } from './flashsale-items.service';
import { CreateFlashsaleItemDto } from './dto/create-flashsale-item.dto';
import { UpdateFlashsaleItemDto } from './dto/update-flashsale-item.dto';

@Controller('flashsale-items')
export class FlashsaleItemsController {
    constructor(
        private readonly flashsaleItemsService: FlashsaleItemsService,
    ) {}

    @Post()
    create(@Body() createFlashsaleItemDto: CreateFlashsaleItemDto) {
        return this.flashsaleItemsService.create(createFlashsaleItemDto);
    }

    @Get()
    findAll() {
        return this.flashsaleItemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.flashsaleItemsService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateFlashsaleItemDto: UpdateFlashsaleItemDto,
    ) {
        return this.flashsaleItemsService.update(+id, updateFlashsaleItemDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.flashsaleItemsService.remove(+id);
    }
}
