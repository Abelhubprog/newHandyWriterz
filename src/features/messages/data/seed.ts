import { faker } from "@faker-js/faker"

import { messageSchema } from "./schema"

// Function to create a random message
function createRandomMessage() {
  return {
    id: `MSG-${faker.string.alphanumeric(5).toUpperCase()}`,
    senderName: faker.person.fullName(),
    senderEmail: faker.internet.email(),
    subject: faker.lorem.sentence(),
    snippet: faker.lorem.paragraph(),
    status: faker.helpers.arrayElement(["read", "unread", "archived"]),
    receivedAt: faker.date.past(),
  };
}

// Generate 100 messages
export const messages = Array.from({ length: 100 }, createRandomMessage).map(message => messageSchema.parse(message));
