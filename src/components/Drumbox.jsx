import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useSound from 'use-sound';
const DivBox = styled.div`
    background: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    max-width: 550px;
    margin: 13% auto;
    border-radius: 15px;
    border: 2px solid #334443;

`

const DivKeys = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1f;
    grid-gap: 5%;
`
const DivDisplay = styled.div`
    text-align: center;
    background: #c6ffc1;
    margin-left: 100px;
    border-radius: 15px;
    border: 2px solid #334443;
    @media (max-width: 524px) {
        margin-left: 30px;

    }
`

const H1Display = styled.h1`
    color: #34656d;
    padding-left: 20px;
    padding-right: 20px;
    @media (max-width: 524px) {
        padding-left: 10px;
        padding-right: 10px;
        font-size: 28px;

    }
`

const ButtonStyle = styled.button`
    color: #fffbdf;
    background:  #34656d;
    height: 50px;
    width: 50px;
    border: 2px solid #334443;
    :hover {
        background: yellow;
    }
`

export const Drumbox = () => {

    const drums = [
        {
            id: 'Q',
            name: 'Heater 1',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
            id: 'W',
            name: 'Heater 2',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
            id: 'E',
            name: 'Heater 3',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
            id: 'A',
            name: 'Heater 4',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        {
            id: 'S',
            name: 'Clap',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
            id: 'D',
            name: 'Open HH',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
            id: 'Z',
            name: `Kick n' Hat`,
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        {
            id: 'X',
            name: 'Kick',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
            id: 'C',
            name: 'Closed HH',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        },
    ]

    const [state, setstate] = useState('Sonido')
    const handleClick = (e) => {
        console.log(e.target.name)
        e.target.firstElementChild.play()
        setstate(e.target.name)

    }

    return (
        <DivBox id="drum-machine">
            <DivKeys name="hello">
                {
                    drums.map(el => 
                    <ButtonStyle id={el.id} name={el.name} key={el.id} onClick={handleClick} className="drum-pad" >{el.id}
                        <audio id={el.id} className="clip" src={el.src}></audio>
                    </ButtonStyle>)
                }
            </DivKeys>
            <DivDisplay>
                <H1Display id="display">{state}</H1Display>
            </DivDisplay>
        </DivBox>
    )
}
