import chief from './Assets/chief.png';
import { useNavigate } from 'react-router-dom';

function CallToAction() {

    const navigate=useNavigate();

    const goToReservation=()=>{
        navigate('/reservations');
    }

    return(
            <section className="callToAction">
                <div className="callToAction_text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, <br />
                focused on traditional recipes served with a modern twist. </p>
                 <button type='button' className="button_callToAction" onClick={goToReservation}>Reserve a table</button>
                </div>
                <div className="callToAction_image">

                <img src={chief} alt='chief'/>
                </div>

             </section>
    )
}
export default CallToAction;