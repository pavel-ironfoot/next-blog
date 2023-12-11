import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'First',
    description: 'First is the best!',
  }

export default function First(){
    return (
        <div>
            <h1>First</h1>
        </div>
    )
}