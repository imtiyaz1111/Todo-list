import { useState } from "react";


const Todoform = () => {
    const [text, setText] = useState("");

    const onFormSubmit = (e) => {
       
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

  return (
    <form className="form" onSubmit={onFormSubmit}>
    <input  
        placeholder="Enter new todo..."
        className="input"
        onChange={onInputChange}
        value={text}
    />
</form>
  )
}

export default Todoform
