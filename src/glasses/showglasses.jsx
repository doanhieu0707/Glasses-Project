import { useState } from 'react'

export default function ShowGlasses() {
    const [Image, setImage] = useState("./g1.jpg")
  
    const handleChangeGlasses = (url) => {
        setImage(url)
    }
    return (
        <div></div>
    )
}
