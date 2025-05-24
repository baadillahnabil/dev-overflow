import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import ROUTES from "@/constants/route"

const Home = async () => {
  const session = await auth()

  console.log("Session:", session)

  const handleSignOut = async () => {
    "use server"
    await signOut({ redirectTo: ROUTES.SIGN_IN })
  }

  return (
    <>
      <h1 className="h1-bold">Welcome to NextJs</h1>

      <form className="pl-10 pt-[100px]" action={handleSignOut}>
        <Button type="submit">Log Out</Button>
      </form>
    </>
  )
}

export default Home
