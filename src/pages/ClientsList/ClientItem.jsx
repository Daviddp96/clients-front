const ClientItem = ({ name, lastName, onDeleteClick, onViewClick }) => {
    return (
        <li className="list-item">
            {name} {lastName}
            <div className="item-actions">
                <button onClick={onViewClick}>View</button>
                <button onClick={onDeleteClick} className="delete-button">Delete</button>
            </div>
        </li>
    );
}

export default ClientItem;