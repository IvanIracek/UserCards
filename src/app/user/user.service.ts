import { Injectable } from '@angular/core'
import { User } from './user.model'

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private users = [{
        id: 'u1',
        name: 'Jasmine Washington',
        avatar: 'user-1.jpg',
        email: 'jasmine@mail.com'
    },
    {
        id: 'u2',
        name: 'Emily Thompson',
        avatar: 'user-2.jpg',
        email: 'emily@email.com'
    },
    {
        id: 'u3',
        name: 'Marcus Johnson',
        avatar: 'user-3.jpg',
        email: 'mracus@mail.com'
    },
    {
        id: 'u4',
        name: 'David Miller',
        avatar: 'user-4.jpg',
        email: 'david@mail.com'
    },
    {
        id: 'u5',
        name: 'Priya Patel',
        avatar: 'user-5.jpg',
        email: 'priya@mail.com'
    },
    {
        id: 'u6',
        name: 'Arjun Singh',
        avatar: 'user-6.jpg',
        email: 'arjun@mail.com'
    },
    ]

    get getAllUsers() {
        return this.users
    }

    getUser(oneUser: User) {
        return this.users.find(user => user.id === oneUser.id)
    }

    addUser(user: User) {
        this.users.push(user)
        localStorage.setItem('users', JSON.stringify(this.users))
    }

    removeUser(oneUser: User) {
        this.users = this.users.filter(user => user.id !== oneUser.id)
        localStorage.setItem('users', JSON.stringify(this.users))
    }

}