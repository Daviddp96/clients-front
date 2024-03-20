import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import customerServices from '../../services/customerServices';
import './CreateClient.css';

const CreateClient = () => {
    const [userInput, setUserInput] = useState({
        first_name: '',
        last_name: '',
        gender: 'Male',
        email: '',
        image: '',
    });

    const navigate = useNavigate();

    const handleGoBackOnClick = () => {
        navigate(`/customers`);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        customerServices.postOne(userInput).then((response) => {
            console.log(response);
            navigate('/customers');
        });
    };

    const handleInputChange = (event) => {
        userInput[event.target.name] = event.target.value
        setUserInput({...userInput});
    }

    return (
        <section className="container" id='create-client__container'>
            <div className="container-header">
                <button onClick={handleGoBackOnClick}>{'<<'}</button>
            </div>
            <form action="submit" className="create-form" onSubmit={(event) => handleSubmit(event)}>
                <div className="input-group">
                    <p className='full-width-input'>
                        <label htmlFor="firstname-input" >First Name:</label>
                        <input required type="text" onChange={(event) => handleInputChange(event)} id="firstname-input" name='first_name' />
                    </p>
                    <p className='full-width-input'>
                        <label htmlFor="lastname-input" >Last Name:</label>
                        <input required type="text" onChange={(event) => handleInputChange(event)} id="lastname-input" name='last_name' />
                    </p>
                </div>
                <div className="input-group">
                    <p className='full-width-input'>
                        <label htmlFor="email-input" >Email:</label>
                        <input required type="email" id="email-input" onChange={(event) => handleInputChange(event)} name='email' />
                    </p>
                    <p className='mid-width-input'>
                        <label htmlFor="gender-input" >Gender:</label>
                        <select id="gender-input" onChange={(event) => handleInputChange(event)} name='gender'>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </p>
                </div>
                <div className="input-group">
                    <p className='full-width-input'>
                        <label htmlFor="url-input" >Photo (URL):</label>
                        <input required type="url" id="url-input" onChange={(event) => handleInputChange(event)} name='image' />
                    </p>
                </div>
                <div className="form-actions">
                    <button type='submit' className='create-client__button'>Create Client</button>
                </div>
            </form>
        </section>
    );
}

export default CreateClient;