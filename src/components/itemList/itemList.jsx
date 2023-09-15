import Item from "../item/item"


const ItemList = ({articulos, id}) => {
    return(
        <Item articulos={articulos} id={id}/>
    )
}
export default ItemList