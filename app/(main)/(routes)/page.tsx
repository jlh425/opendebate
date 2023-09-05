import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserButton />
      <ModeToggle />
      <div>
        <p>
          Welcome to Open debate, a place where you can discuss topics with anyone. The purpose of this discord is to help each other improve our 
          debating skills, to improve our own thinking and to have fun. Please remember that the goal is not to be right.
           Open Debate is based on the premise that you don&rsquo;t know the strengths and 
          weaknesses of your position until you&rsquo;ve tested it against the best arguments against it.
        </p>
      </div>
    </main>
  )
}
