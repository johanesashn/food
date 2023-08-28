import background from "/assets/background.png"

export default function Splash(){
    return (
        <div className="splash">
            <img src={background} alt="" />
            <h3 className="header-title">F<span>OO</span>DIES</h3>
        </div>
    )
}