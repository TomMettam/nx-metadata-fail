import 'reflect-metadata';

function test()
{
  return function(target: any, propertyKey: string)
  {
    Reflect.defineMetadata('design:type', target, target, propertyKey);
  }
}

export class Test
{
  @test()
  public myNum = 1.0;
}

const t = new Test();

console.log('Type: ' + Reflect.getMetadata('design:type', Test, 'myNum'));
console.log('Type: ' + Reflect.getMetadata('design:type', t, 'myNum'));

console.log('Hello World');
