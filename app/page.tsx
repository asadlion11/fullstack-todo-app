import { Suspense } from 'react'

import TodoForm from '../app/_components/todo/TodoForm'
import AllTodo from './_components/todo/AllTodo'
import Loading from './_components/todo/Loading'

const Home = () => {
  return (
    <main className='flex flex-col items-center justify-center mt-32 mx-auto max-w-lg'>
      <TodoForm />
      <Suspense fallback={<Loading />}>
        <AllTodo />
      </Suspense>
    </main>
  )
}

export default Home