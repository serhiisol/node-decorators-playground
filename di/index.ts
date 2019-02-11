import {
  Injectable,
  Inject,
  Container,
  InjectionToken,
  Optional
} from '@decorators/di';

// @Injectable()
export class HelloWorld {}

Container.provide([
  {
    provide: 'Hello World',
    useClass: HelloWorld
  }
])

const helloWorld = Container.get<HelloWorld>('Hello World');
console.log(helloWorld);
