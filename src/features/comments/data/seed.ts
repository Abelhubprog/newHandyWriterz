import { faker } from "@faker-js/faker"

import { commentSchema } from "./schema"

// Function to create a random comment
function createRandomComment() {
  return {
    id: `CMT-${faker.string.alphanumeric(5).toUpperCase()}`,
    authorName: faker.person.fullName(),
    authorEmail: faker.internet.email(),
    authorAvatar: faker.image.avatar(),
    content: faker.lorem.paragraph(),
    postTitle: faker.lorem.sentence(),
    postId: `POST-${faker.string.alphanumeric(5).toUpperCase()}`,
    status: faker.helpers.arrayElement(["approved", "pending", "spam"]),
    createdAt: faker.date.past(),
  };
}

// Generate 100 comments
export const comments = Array.from({ length: 100 }, createRandomComment).map(comment => commentSchema.parse(comment));
