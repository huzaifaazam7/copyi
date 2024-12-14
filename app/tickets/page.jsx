import { Suspense } from "react"
import TicketList from "./TicketList"
import Loading from "../loading"

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Wait For Your Time</h2>
          <p><small>Hope For the best.</small></p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}