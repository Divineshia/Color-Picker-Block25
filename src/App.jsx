import {useState} from "react";

// Write your Color component here

const Color= ({color,setSelectedColor,selectedColor})=> {
  return (
  <div className = {`${color} ${selectedColor === color ? 'selected':''}`}
  onClick={()=>setSelectedColor(color)}
  />
  );
}
// //Or Object deconstruction
// const Color =({color})=>{
//   return <div className={color}></div>
// }
const App = () => {
  const [selectedColor, setSelectedColor]=useState('');
  const selectColor = (colorName)=> {
    setSelectedColor(colorName);
  }
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className ={selectedColor}>{selectedColor }</div>
      </div>
      <div id="colors-list">
        <Color color ='yellow' setSelectedColor={setSelectedColor} selectColor={selectColor}  />
        <Color color='green' setSelectedColor={setSelectedColor} selectColor={selectColor}/>
        <Color color ='violet'setSelectedColor={setSelectedColor}selectColor={selectColor}/>
</div>
    </div>
  );
};

export default App;
