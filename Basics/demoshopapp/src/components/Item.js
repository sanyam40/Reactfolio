import './Item.css'

function Item(props) {
    const ItemName = props.name;
    return (
        <>
            <p className='hello'>{ItemName}</p>
            {props.children}
        </>
    );
}

export default Item;