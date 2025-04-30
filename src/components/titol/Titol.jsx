import './Titol.css';

export default function Titol(props) {
    return (    
        <>
            <h1>{props.titol}</h1>
            <h2>{props.subtitol}</h2>
        </>
    )
}
