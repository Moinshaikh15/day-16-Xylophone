
function Plate(props) {
    return (
        <div className="tonePlate-div">
            <div className="tone-plate" style={{ height: props.height, background: props.color }} onClick={() => props.sound()} onMouseOver={()=>props.sound()} >{props.letter} </div>
            <h1>{props.num}</h1>
        </div>
    )
}

export default Plate