import "./style.css"

export default function App (){
  return(
    <>
    <form className="new-item-form">
 
    <div className="form-row">
    <label htmlFor="item">New item</label>
    <input type="text" name="item" />
    </div>
    <button className="btn">ADD</button>
    </form>
    <h1 className="header">Todo List</h1>
      <ul className="List">
           <li>
             <label>
             <input type="checkbox"/>
             item 1
             </label>
             <button className="btn btn-danger">
             DELETE
             </button>
           </li>
           <li>
             <label>
             <input type="checkbox"/>
             item 2S
             </label>
             <button className="btn btn-danger">
             DELETE
             </button>
           </li>
       </ul>
    </>
  
  ) 
}