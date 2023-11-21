import styles from "./page.module.css"
import { revalidatePath } from "next/cache"

const todoList = ["Remove Name"]

export default function Home() {
  async function addTodo(data) {
    "use server"
    const todo = data.get("todo")
    todoList.push(todo)
    revalidatePath("/")
  }

  return (
    <main className={styles.main}>
      <p className={styles.title}>Todo</p>
      {todoList.map((todo) => (
        <p className={styles.text} key={todo}>
          {todo}
        </p>
      ))}
      <form action={addTodo}>
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
      </form>
    </main>
  )
}
