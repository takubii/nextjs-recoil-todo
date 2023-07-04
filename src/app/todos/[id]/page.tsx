'use client';

import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import { todoState } from '@/atoms/todoState';

export default function Page({ params }: { params: { id: string } }) {
  const todos = useRecoilValue(todoState);
  const todo = todos.find((todo) => todo.id === Number(params.id));

  return (
    <main className='container mx-auto max-w-md'>
      <h1
        className={`mt-2 mb-2 text-lg ${
          todo?.isCompleted ? 'line-through text-green-500' : 'text-slate-500'
        }`}
      >
        {todo?.title}
      </h1>
      <Link href='/' className='text-blue-400 hover:text-blue-600 '>
        back
      </Link>
    </main>
  );
}
