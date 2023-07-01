import styles from './waveText.module.css';
import { useEffect, useState } from 'react';

const WaveText = ({phrase}) => {

    const [letters, setLetters] = useState([]);

    useEffect(() => {

        // if does not prefer reduced motion
        // split phrase into separate items
        // apply a class to animate

        setLetters(phrase.split(''));

    }, []);

    return (
        <h1 className={styles.heading}>
            {letters.length !== 0 && letters.map((letter, index) => <span style={{"--indexNum":`${index}s`}} key={index} className={styles.letter} data-letter-order={index}>{letter}</span>)}
        </h1>
    );
}

export default WaveText;