import css from "./Buttons.module.css"

const Buttons=({onButtonClick})=>{
    const buttonName=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
   
    return  <div className={css.ButtonContainer}>
         {buttonName.map((ButtonName1)=>(<button className={css.button} onClick={()=>onButtonClick(ButtonName1)}>{ButtonName1}</button>))}
      
      
    </div>
};
export default Buttons;