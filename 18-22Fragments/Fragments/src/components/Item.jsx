import styles from "./Item.module.css"
const Item=({foodItem,bought,handelBuyButton})=>{


return (
  <li   className={`${styles["kg_button"]} list-group-item ${bought && 'active'} `}>
    <span className={styles["kgspan"]}>{foodItem}</span>
    <button className={`${styles.item1} btn btn-info`}
  onClick={handelBuyButton}
    >Buy</button>
  </li>
);
};

export default Item;