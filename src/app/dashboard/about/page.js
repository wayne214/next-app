import {use} from 'react';

async function getData() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    message: 'Hello, AboutPage'
  };
}


export default function About() {
  const {message} = use(getData());

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}   
