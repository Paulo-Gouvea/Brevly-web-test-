import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export function App() {
  return (
    <main className="h-dvh w-dvw bg-gray-200">
      <RouterProvider router={router} />
    </main>
  )
}