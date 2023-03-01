
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
    return(
      
            
   
        <div className="app p-5"  style={{textAlign:"center"}}>
        <section className="main-content columns is-fullheight">
            <br />
            <div className="column is-10">
                <div className="section">
                <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">{props.titulo}</h5> 
                        </div>
                        <div className="card-content">
                            <div className="content">
                                                            
                                {props.children}
                            </div>
                        </div>
                    </div>
    </div>
            </div>
        </section>
    </div>
    )
}
export default Header;