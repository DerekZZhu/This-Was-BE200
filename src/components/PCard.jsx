import './pCard.css'
const PCard = (props) => {
    function handleClick() {
        console.log(props.keyII);
        console.log(props.isActive);
        props.passup(props.keyII)
    }
    

    return(
        <div className={`iv ${props.isActive?'iv_grow':''}`} style={{backgroundImage:`url('${props.bg_img}')`}} onClick={handleClick}>
            <span className='icon_wrapper' style={{color:props.color}}>{props.icon}</span>
            {/* {props.name} */}
        </div>
    )
}

export default PCard