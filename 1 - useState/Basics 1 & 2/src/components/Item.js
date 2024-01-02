import './Item.css'

function Item(props) {
    const ItemName = props.name;
    let title=props.title;

    return (
        <>
            <p className='hello'>{ItemName}</p>
            {props.children}
            {title}
        </>
    );
}

export default Item;