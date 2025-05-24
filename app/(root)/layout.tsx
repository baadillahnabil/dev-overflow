import { type PropsWithChildren } from "react"

import Navbar from "@/components/navbar"

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

export default RootLayout
