import css from "./Container.module.css"
const Container=(props)=>{
    return <div className={css.Container1}>{props.children}</div>
}
export default Container;