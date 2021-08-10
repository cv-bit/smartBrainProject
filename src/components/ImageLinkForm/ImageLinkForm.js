import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='fa3'>
                {'This magic brain will detect faces in your pictures. Give it a try!'}
            </p>
            <p className=''>
                {'copy and paste these into the bar below or try your own with the same url type.'}
            </p>
            <p className='black'>
                {'https://static3.thethingsimages.com/wordpress/wp-content/uploads/2020/10/Friends-cast-90s.jpg'}
            </p>
            <p className='black'>
                {'https://www.themodestman.com/wp-content/uploads/2020/05/Jack-Black.jpg'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                        onClick={onButtonSubmit/*api key = 0bb896e6236b4c949a67ac02fafee711 */}
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm
