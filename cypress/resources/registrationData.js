import { faker } from '@faker-js/faker';

export const emailTestData = [
    { email: 'user@example.com' },
    { email: 'user.na-me+test@example.com' },
    { email: 'User.Example@domain.com' },
    { email: 'user@mail.example.com' },
    { email: 'test.user+123@subdomain.example.co.uk' },
    { email: 'userexample.com' },
    { email: 'user@' },
    { email: 'user@exam!ple.com' },
    { email: 'user @example.com' },
    { email: ' ' },
    {email: 'test.user+123@subdomain.example.co.uk'}
];

export const passwordTestData = [
    { email : faker.internet.email(), password: 'Password123', confirmPassword: 'Password123' },
    { email : faker.internet.email(), password: 'Pa$$w0rd!', confirmPassword: 'Pa$$w0rd!' },
    { email : faker.internet.email(), password: 'Pass123456', confirmPassword: 'Pass123456' },
    { email : faker.internet.email(), password: 'ThisIsMyLongPassword1', confirmPassword: 'ThisIsMyLongPassword1' },
    { email : faker.internet.email(), password: 'Password123 ', confirmPassword: 'Password123 ' },
    { email : faker.internet.email(), password: ' ', confirmPassword: ' ' },
    { email : faker.internet.email(), password: 'Password123', confirmPassword: 'password123' },
    { email : faker.internet.email(), password: 'Pass123', confirmPassword: 'Pass123' },
    { email : faker.internet.email(), password: 'password123', confirmPassword: 'password123' },
    { email : faker.internet.email(), password: 'PasswordABC', confirmPassword: 'PasswordABC' },
    { email : faker.internet.email(), password: 'Pa ssword1', confirmPassword: 'Pa ssword1' },
    { email : faker.internet.email(), password: 'Pass12345', confirmPassword: 'Pass12345' },
    { email : faker.internet.email(), password: 'ThisIsMyVeryLongPassword1', confirmPassword: 'ThisIsMyVeryLongPassword1' }
];
