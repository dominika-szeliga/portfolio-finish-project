import chief2 from './Assets/chief2.jpg';
import oysters from './Assets/oysters.jpg';


function Chicago() {
    return(
        <section className="chicago">
                <article>
                <h3>Little Lemon is a Mediterranean restaurant based in Chicago,<br />
                Illinois, that focuses on traditional recipes served with a modern twist.<br />
                The chefs draw inspiration from Italian, Greek, and Turkish cultures,<br />
                and their menu consists of 12-15 items that change seasonally.<br />
                The restaurant has a rustic and casual atmosphere with moderate prices,<br />
                 making it a popular place to eat any time of day.</h3>
                 <img src={chief2} alt='restaurant chief'/>
                 <img src={oysters} alt='oysters'/>

                 </article>
        </section>
    )
}

export default Chicago;