import Image from 'next/image'

export default function Hoge() {
  return (
    <main>
      <div>テスト</div>
      <div>テスト2</div>
      <div>テスト3</div>
      {process.env.NEXT_PUBLIC_URL}
      <br/>
      {process.env.NEXT_PUBLIC_HOGE}
    </main>
  )
}
