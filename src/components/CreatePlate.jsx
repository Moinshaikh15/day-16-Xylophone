import Plate from "./Plate";

function CreatePlate() {

    let s1 = "./sounds/sounds_bvng.mp3"
    let s2 = "./sounds/sounds_crfo.mp3"
    let s3 = "./sounds/sounds_dtse.mp3"
    let s4 = "./sounds/sounds_edqt.mp3"
    let s5 = "./sounds/sounds_ldcc.mp3"
    let s6 = "./sounds/sounds_peoi.mp3"
    let s7 = "./sounds/sounds_tena.mp3"
    let s8 = "./sounds/sounds_udgb.mp3"

    let playSound = (id) => {

        let sound = new Audio(id)
        console.log('ll')
        sound.play();

    }

    return (
        <div className="plate-container">
            <Plate num={1} letter={'C'} height={`600px`} color={'#d62828'} sound={() => playSound(s1)} />
            <Plate num={2} letter={'D'} height={`550px`} color={'#f77f00'} sound={() => playSound(s2)} />
            <Plate num={3} letter={'E'} height={`500px`} color={'#ffb703'} sound={() => playSound(s3)} />
            <Plate num={4} letter={'F'} height={`450px`} color={'#008000'} sound={() => playSound(s4)} />
            <Plate num={5} letter={'G'} height={`400px`} color={'#14746f'} sound={() => playSound(s5)} />
            <Plate num={6} letter={'A'} height={`350px`} color={'#00a5cf'} sound={() => playSound(s6)} />
            <Plate num={7} letter={'B'} height={`300px`} color={'#5603ad'} sound={() => playSound(s7)} />
            <Plate num={8} letter={'C'} height={`250px`} color={'#da2c38'} sound={() => playSound(s8)} />
        </div>
    )

}

export default CreatePlate