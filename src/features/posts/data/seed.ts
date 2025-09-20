import { faker } from '@faker-js/faker';
import { Post } from './schema';

const statuses = ['draft', 'published', 'review'];
const domains = ['Adult Health', 'Mental Health', 'Child Nursing', 'Social Work', 'Technology', 'AI', 'Crypto'];

const createRandomPost = (): Post => {
  return {
    id: `POST-${faker.number.int({ min: 1000, max: 9999 })}`,
    title: faker.lorem.sentence(5),
    author: faker.person.fullName(),
    domain: faker.helpers.arrayElement(domains),
    status: faker.helpers.arrayElement(statuses),
    publishedAt: faker.date.past(),
  };
};

export const posts = Array.from({ length: 100 }, createRandomPost);
