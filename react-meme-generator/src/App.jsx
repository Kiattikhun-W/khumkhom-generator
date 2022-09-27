import {useRef, useState} from 'react'
import './App.css'
import templateImg from './assets/khom-template-2.jpg'
import {saveAs} from "file-saver"
import domtoimage from "dom-to-image"

function App() {
    const [saving, setSaving] = useState(false)
    const imgRef = useRef(null)

    function downloadImage() {
        setSaving(true)
        domtoimage
            .toPng(imgRef.current, {})
            .then(function (blob) {
                saveAs(blob, `khom.png`)
                setSaving(false)
            })
            .catch(function (error) {
                console.error("oops, something went wrong!", error)
            })
    }

    return (

        <main
            className={'grid place-content-center min-h-screen scale-[0.34] sm:scale-45 md:scale-[0.65] lg:scale-100'}>
            <div
                className={'font-extrabold  mb-4 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#36D8FF] to-[#00ACEE]'}> คมมาก
                Generator
            </div>
            <div className={'relative   w-[1200px] h-[660px] '} ref={imgRef}>
                <div className="absolute h-full w-full ">
                    <div className={'absolute top-20 left-20 right-20 bottom-0'}>
                        <img src={templateImg} className={'absolute max-w-none h-full '} alt='khum-khom'/>
                    </div>
                </div>
                <div>
                    <input

                        className={`${saving
                            ? "border-2 border-transparent resize-none overflow-y-hidden"
                            : "border-2 border-[#00acee] rounded-xl"
                        }absolute top-[13rem] w-2/4 left-[18rem] caret-white absolute  text-2xl font-bold  appearance-none rounded  `}/>
                </div>
                <div>
                    <input

                        className={`${saving
                            ? "border-2 border-transparent resize-none overflow-y-hidden"
                            : "border-2 border-[#00acee] rounded-xl"
                        }absolute top-[16.6rem] w-[200px] left-[19.5rem] caret-white absolute  text-lg font-medium text-gray-500   appearance-none rounded  `}/>
                </div>
                <div className={'  '}>

                    <textarea rows={3} className={`${
                        saving
                            ? "border-2 border-transparent resize-none overflow-y-hidden"
                            : "border-2 border-[#00acee] rounded-xl"
                    }  absolute h-[200px]   top-[25rem] left-[12rem] right-[12rem]  rounded  text-black text-4xl`}
                    />
                </div>
            </div>
            <div>
                <button
                    onClick={downloadImage}
                    className="bg-blue-500 w-2/4 h-[50px] hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded my-4">Download
                </button>

            </div>

        </main>
    )
}

export default App
// absolute  top-[13rem] left-[17rem] right-[12rem]