import { faker } from "@faker-js/faker"

import { fileSchema } from "./schema"

// Function to create a random file
function createRandomFile() {
  const fileType = faker.helpers.arrayElement(["image", "document", "video", "audio", "archive", "other"]);
  const fileName = `${faker.system.commonFileName()}.${faker.system.fileExt()}`;

  return {
    id: `FILE-${faker.string.alphanumeric(5).toUpperCase()}`,
    name: fileName,
    type: fileType,
    size: faker.number.int({ min: 1024, max: 1024 * 1024 * 50 }), // 1KB to 50MB
    uploader: faker.person.fullName(),
    status: faker.helpers.arrayElement(["available", "archived", "deleted"]),
    createdAt: faker.date.past(),
    url: faker.internet.url(),
  };
}

// Generate 100 files
export const files = Array.from({ length: 100 }, createRandomFile).map(file => fileSchema.parse(file));
