import { useState, useEffect } from 'react'
import CatImage from './CatImage'

const Main = () => {

    const [url, setUrl] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        setUrl('https://cataas.com/cat/says/Change%20This%20With%20Your%20Name?position=center&font=Impact&fontSize=50&fontColor=%23fff&fontBackground=none');
    }, []);
    
    const changeName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    
    const urlNameChange = (e) => {
        e.preventDefault()
        const name_display = name.trim().replace(' ', '%20');
        if(name_display){
          setUrl('https://cataas.com/cat/says/' + name_display + '?position=center&font=Impact&fontSize=50&fontColor=%23fff&fontBackground=none')
        } else {
          setUrl('')
        }
    }
    return (
        <main className='container'>
            <hgroup>
                <h1>Cat Meme Maker</h1>
                <p>Make Silly Cat Image With Name</p>
            </hgroup>
            <div>
                <fieldset role="group">
                <input type="text" onChange={changeName} placeholder='Type Somebody Name'/>
                <input type='submit' onClick={urlNameChange}/>
                </fieldset>
            </div>
            <CatImage url={url} />
        </main>
    )

}

export default Main;