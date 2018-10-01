import { sayHello } from './utils';

describe('sayHello', () => {

  it('says "hello" if random is less than 0.5', () => {
    Math.random = jest.fn().mockReturnValue(0.499);
    expect(sayHello()).toEqual('Hello');
  });

  it('says "hola" if random is equal to 0.5', () => {
    Math.random = jest.fn().mockReturnValue(0.5);
    expect(sayHello()).toEqual('Hola');
  });

  it('says "hola" if random is greater than 0.5', () => {
    Math.random = jest.fn().mockReturnValue(0.75);
    expect(sayHello()).toEqual('Hola');
  });
});
