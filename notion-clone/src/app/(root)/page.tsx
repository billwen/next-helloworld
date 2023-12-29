import Image from 'next/image'
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <div>
        <Button variant="outline" size="sm">Shadcn</Button>
      <p className="text-red-500 font-medium">Hello Notion Clone</p>
    </div>
  )
}
