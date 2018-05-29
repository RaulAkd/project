import { Injectable } from '@nestjs/common';
//import { User } from "./interfaces/usuario.interface";

interface User {
}

@Injectable()
export class CatsService {
    private readonly users: User[] = [];

    create(user: User) {
        this.users.push(user);
    }

    findAll(): User[] {
        return this.users;
    }
}