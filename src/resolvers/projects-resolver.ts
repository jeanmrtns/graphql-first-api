import {randomUUID} from 'node:crypto'
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";

import { CreateProjectInput } from "../dtos/inputs/create-project-input";
import { Project } from "../dtos/models/project-model";
import { User } from '../dtos/models/user-model';

@Resolver(() => Project)
export class ProjectsResolver {

  projects: Project[] = []

  @Query(() => [Project])
  async getAllProjects(): Promise<Project[]> {
    return this.projects
  }

  @Mutation(() => Project)
  async createProject(@Arg('data') data: CreateProjectInput): Promise<Project> {
    const project: Project = {
      id: randomUUID(),
      name: data.name,
      description: data.description
    }

    this.projects.push(project)
    return project
  }

  @FieldResolver(() => User)
  async user(@Root() project: Project): Promise<Project> {
    console.log(project)

    return {
      description: 'lala',
      id: '12',
      name: 'Nome'
    }
  }
}