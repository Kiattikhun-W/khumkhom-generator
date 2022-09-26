import {useState} from 'react'
import './App.css'
import templateImg from './assets/khom-template-2.jpg'

function App() {
    const [saving,setSaving] = useState(false)

  return (
    <main className={'grid place-content-center'}>
        <div className={'text-7xl mb-2'}> คมมาก Generator</div>
        <div className={'relative border-2  w-[1170px] h-[660px]'}>
            <div>
                <img src={templateImg } alt='khum-khom'/>
            </div>
            <div className={'relative    '}>
                <textarea rows={3} className={`${
                    saving
                        ? "border-2 border-transparent resize-none overflow-y-hidden"
                        : "border-2 border-[#00acee] rounded-xl"
                } absolute   bottom-[2rem] w-[900px]  left-[12%]  h-[300px]  rounded  text-black text-4xl`} type="text"/>


            </div>
        </div>

    </main>
  )
}

export default App
