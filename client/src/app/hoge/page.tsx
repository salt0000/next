import Image from 'next/image'

export default function Hoge() {
  return (
    <main>
      {process.env.NEXT_PUBLIC_URL}
    </main>
  )
}
