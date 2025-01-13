import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { ItemImagesService } from './item-images.service';
import { CreateItemImageDto } from './dto/create-item-image.dto';
import { UpdateItemImageDto } from './dto/update-item-image.dto';

@Controller('item-images')
export class ItemImagesController {
    constructor(private readonly itemImagesService: ItemImagesService) {}

    @Post()
    create(@Body() createItemImageDto: CreateItemImageDto) {
        return this.itemImagesService.create(createItemImageDto);
    }

    @Get()
    findAll() {
        return this.itemImagesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.itemImagesService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateItemImageDto: UpdateItemImageDto,
    ) {
        return this.itemImagesService.update(+id, updateItemImageDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.itemImagesService.remove(+id);
    }
}
