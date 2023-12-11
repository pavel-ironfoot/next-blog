import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Second',
    description: 'Second is the second!',
  }

export default function Second(){
    return (
        <div>
            <h1>Second</h1>
        </div>
    )
}