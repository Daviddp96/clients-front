import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ClientDetail.css';
import customerServices from '../../services/customerServices';

const ClientDetail = ({ name, lastName, gender, email, image }) => {
    const [details, setDetails] = useState({
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        image: '',
    });

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        customerServices.getOneById(params.id).then((data) => {
            setDetails(data);
        });
    }, []);

    const handleGoBackOnClick = () => {
        navigate(`/customers`);
    }

    return (
     <section className="container">
            <div className="container-header">
                <button onClick={handleGoBackOnClick}>{'<<'}</button>
            </div>
            
            <div className="profile-content">
                <div>
                    <img src={details.image} alt='user profile picture'/>
                </div>
                <div className="details">
                    <div>
                        <h3>{details.first_name} {details.last_name}</h3>
                        <p>{details.gender}</p>
                    </div>
                    {details.email}
                </div>
            </div>
     </section>  
    );
}

export default ClientDetail;