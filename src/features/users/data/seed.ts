import { faker } from "@faker-js/faker"

import { userSchema } from "./schema"

// Function to create a random user
function createRandomUser() {
  return {
    id: `USR-${faker.string.alphanumeric(5).toUpperCase()}`,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(["admin", "editor", "viewer"]),
    status: faker.helpers.arrayElement(["active", "inactive", "pending"]),
    createdAt: faker.date.past(),
    lastLogin: faker.date.recent(),
    avatar: faker.image.avatar(),
  };
}

// Generate 100 users
export const users = Array.from({ length: 100 }, createRandomUser).map(user => userSchema.parse(user));
