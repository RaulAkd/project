import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Post()
    create(@Body() createUserDto) {
        return 'Nuevo usuario';
    }

    @Get()
    findAll() {
        return 'Lista de usuarios';
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return `User #${id} usuario`;
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateUserDto) {
        return `Update #${id} usuario`;
    }

    @Delete(':id')
    remove(@Param('id') id) {
        return `borrar #${id} usuario`;
    }
}