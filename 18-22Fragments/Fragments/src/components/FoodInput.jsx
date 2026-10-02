import css from "./FoodInput.module.css"
const FoodInput=({handelKeyDown})=>{
    return <>
    <input type="text"
    placeholder="Enter Food Item"
    className={css.Input1}
    onKeyDown={handelKeyDown}
    />
    </>
}
export default FoodInput;