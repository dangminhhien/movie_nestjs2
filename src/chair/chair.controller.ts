import { Body, Controller, Get, Post, Render, Req } from '@nestjs/common';
import { ChairService } from './chair.service';
import { BookSeatsDto } from 'src/DTO/chair.dto';

@Controller('chair')
export class ChairController {
    constructor(private readonly chairService: ChairService) {

    }
    @Get()
    @Render('chair')
    async showChair( @Req() req: Request){
        const username = (req as any).session?.username;
        return { username };
    }

    // async getChair(){
    //     const chair = await this.chairService.findAll();
    //     return {chair};
    // }

    // @Post ('book')
    // async bookChair(@Body() bookSeatsDto: BookSeatsDto){
    //     return await this.chairService.bookChair(bookSeatsDto);
    // }
}

