import { useParams } from 'react-router-dom'
import Map from './Map.jsx'

const Guide = () => {
    const params = useParams();

    console.log(params.mapId);

    return (
        <Map data={data} theme={COLORS.rainbow}/>
    )
}

export default Guide