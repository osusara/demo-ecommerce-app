import CartItem from "./CartItem";

const CartItemsList = ({ items = [] }) => {
  return (
    <div>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartItemsList;
