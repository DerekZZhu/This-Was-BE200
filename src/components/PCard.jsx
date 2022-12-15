import './pCard.css'
const PCard = (props) => {
    function handleClick() {
        console.log(props.keyII);
        console.log(props.isActive);
        props.passup(props.keyII)
    }

    return(
        <div className={`iv ${props.isActive?'iv_grow':''}`} onClick={handleClick}>
            {props.children}
        </div>
    )
}

export default PCard