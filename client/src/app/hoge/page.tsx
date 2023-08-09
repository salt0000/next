import Image from 'next/image'

export default function Hoge() {
  return (
    <main>
      {process.env.NEXT_PUBLIC_URL}
      <br/>
      {process.env.NEXT_PUBLIC_HOGE}
    </main>
  )
}
