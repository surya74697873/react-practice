import { useState } from 'react';
import './HexaRGB.css'
const HexaRGB = () => {

    const [color, setcolor] = useState(null)
    const [type, setType] = useState(null)
    const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

    function randomNumber(length) {
        return Math.floor(Math.random() * length);
    }

    function rgbGenerator() {
        let number = [];
        for (let i = 0; i < 3; i++)
            number[i] = randomNumber(256);
        setcolor(`rgb(${number[0]}, ${number[1]}, ${number[2]})`)
        setType('RGB Color')
    }

    function hexaGenerator() {
        let color = ''
        for (let i = 0; i < 6; i++)
            color += hexa[randomNumber(hexa.length)]
        setcolor(`#${color}`)
        setType('Hexa Color')
    }

    function randomColorGenerator() {
        if (randomNumber(2) == 0)
            rgbGenerator()
        else
            hexaGenerator()
    }

    return (
        <div style={{ background: color }} id='container'>
            <header>
                <button onClick={hexaGenerator}>Hexa Color</button>
                <button onClick={rgbGenerator}>RGB Color</button>
                <button onClick={randomColorGenerator}>Random Color</button>
            </header>
            <div id='details'>
                <div id='type'>{type}</div>
                <div id="color">{color}</div>
            </div>
        </div>
    );
}

export default HexaRGB;
