import React, {useState} from 'react'

const Yujin = () => {
    const [name, setName] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)
    return (
        <>
        <h1>FORM FOR UPLOADING PHOTOS HERE</h1>
        <form>
            <label>PHOTOGRAPHY</label>
            <input 
                type="text" 
                name="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="file"
                value= {selectedFile}
                onChange = {(e) => setSelectedFile(e.target.files[0])}
            />
            <input type="text" name="blurb"/>
            <input type="submit"/>
        </form>

        <form>
            <label>TRAVELS</label>
            <input type="text" name="name"/>
            <input type="file"/>
            <input type="text" name="blurb"/>
            <input type="submit"/>
        </form>

        <form>
            <label>BLOG</label>
            <input type="text" name="name"/>
            <input type="file"/>
            <input type="text" name="blurb"/>
            <input type="submit"/>
        </form>
        </>
    )
}

export default Yujin