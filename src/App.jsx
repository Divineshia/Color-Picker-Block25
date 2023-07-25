import {useState} from "react";


// Write your Color component here
const Color= ({color,setSelectedColor,setColor})=>{
  return (<div className= {color}

  onClick={()=>{setSelectedColor(color)
    if(setSelectedColor===setSelectedColor){
      className ={setColor}}
    }
  }>
  </div>
  )
}
// //Or Object deconstruction
// const Color =({color})=>{
//   return <div className={color}></div>
// }
const App = () => {
  const [selectedColor, setSelectedColor]=useState('')
  //console.log(selectedColor);
  return (
    <div id="container">
      <div id="navbar">
        <div className>Currently selected: </div>
        <div className ={selectedColor}>{selectedColor }</div>
      </div>
      <div id="colors-list">
        <Color color ='yellow' setSelectedColor={setSelectedColor} setColor='selected' />
        <Color color='green' setSelectedColor={setSelectedColor} setColor='selected'/>
        <Color color ='violet'setSelectedColor={setSelectedColor}setColor='selected'/>
</div>
    </div>
  );
};

export default App;
