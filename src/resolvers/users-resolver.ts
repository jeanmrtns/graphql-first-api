import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateUserInput } from "../dtos/inputs/create-user-input";

import {randomUUID} from 'node:crypto'
import { User } from "../dtos/models/user-model";


@Resolver()
export class UsersResolver {
  users: User[] = []

  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return this.users
  }

  @Mutation(() => User)
  async createUser(@Arg('data') data: CreateUserInput): Promise<User> {
    const user: User = {
      id: randomUUID(),
      name: data.name
    }

    this.users.push(user)

    return user
  }
}