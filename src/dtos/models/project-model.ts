import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class Project {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  description: string
}