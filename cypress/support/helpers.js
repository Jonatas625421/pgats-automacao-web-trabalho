import { faker } from '@faker-js/faker'

export function getRandomNumber() {
    //return new Date().getTime()
    return faker.number.hex({ min: 1000, max: 65535 })
}

export function getRandomEmail() {
  return `testador-QA-${getRandomNumber()}@teste99.com`
}
