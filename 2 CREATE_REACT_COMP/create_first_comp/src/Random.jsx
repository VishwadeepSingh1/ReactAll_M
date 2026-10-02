 function Random(){
    let number = Math.random()*10;
    return <h3 style={{'background-color':'#c42e8f'}}>Random number is:{Math.round(number)}</h3>
}
export default Random;