import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import customerServices from "../../services/customerServices";
import ClientItem from "./ClientItem";
import "./ClientsList.css";

const ClientsList = () => {
  const [customerList, setCustomerList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!customerList.length) {
        customerServices.getAll().then((data) => {
            console.log(customerList);
            setCustomerList(data);
        });
    }
  }, [customerList]);

  const handleDeleteOnClick = (id) => {
    customerServices.deleteOneById(id).then(() => {
        setCustomerList(prevList => prevList.filter(customer => customer.id !== id));
    });
  };

  const handleViewOnClick = (id) => {
    navigate(`/customers/${id}`);
  }

  const handleAddOnClick = () => {
    navigate(`/customers/create`);
  }

  return (
    <section className="container">
      <div className="list-header">
        <button onClick={handleAddOnClick}>+ Add Client</button>
      </div>
      <ul className="clients-list">
        {customerList.map((customer, index) => (
          <div key={index}>
            <ClientItem
              name={customer.first_name}
              lastName={customer.last_name}
              onDeleteClick={() => handleDeleteOnClick(customer.id)}
              onViewClick={() => handleViewOnClick(customer.id)}
            />
            <hr
              style={{
                display: `${
                  index + 1 === customerList.length ? "none" : "auto"
                }`,
              }}
            />
          </div>
        ))}
      </ul>
    </section>
  );
};

export default ClientsList;
