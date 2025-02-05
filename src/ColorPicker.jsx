import React, {useState} from 'react';

function ColorPicker(){
    const [color, setColor] = useState('#cccccc')

    function handleColorChange(event){
        setColor(event.target.value);
    }
    return(
        <div className='color-picker-container'>
            <h2>Colour Picker</h2>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
            </div>
            <label> Select a color: </label>
            <input type='color' value={color} onChange={handleColorChange}/>
        </div>
    );
}
export default ColorPicker