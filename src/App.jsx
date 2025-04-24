
import { useState, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "1234567890";
    }
    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    for (let i = 1; i <= length; i++) {
      const randomChar = str.charAt(Math.floor(Math.random() * str.length));
      pass += randomChar;
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const passwordRef=useRef(null);

  useRef(password)

  const copyPassword = ()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }
  const clearPassword =()=>{
    setPassword("");
  }
  
 
  return (
    <div className="container">
      <div className=" text-white flex items-center justify-center flex-col gap-2">
        <label>Your Password</label>
        <div className="flex gap-2">
        <input
          type="text"
          placeholder="Your Strong Password"
          value={password}
          style={{ color: "black", backgroundColor: "#f3f4f6", width: "400px" }}
          className="py-2 px-3 w-96 rounded-lg text-sm border-gray-300 outline-none"
          readOnly
          ref={passwordRef}
        />  
        <button onClick={copyPassword} style={{backgroundColor:"#fff", color:"black", padding: 4}} className="rounded-lg ">Copy</button>

        </div>
        
        <div className="flex gap-2 items-center justify-center">
          <div>
            <input type="range" max={40} value={length} onChange={(e)=>setLength(e.target.value)} />

          </div>
          
          <p>{length}</p>

        </div>
        <div className="flex gap-2">
          <label >Numbers</label>
          <input type="checkbox" onChange={()=>setNumberAllowed((prev)=>!prev)}  />

        </div>
        <div className="flex gap-2">
          <label >Character</label>
          <input type="checkbox" onChange={()=>setCharAllowed((prev)=>!prev)}  />

        </div>
        <div className="flex flex-col gap-2 ">
          <button style={{backgroundColor:"#fff", color:"black", padding: 6 }} className="custom-button rounded-lg hover:bg-gray-200  " onClick={passwordGenerator}>Generate Password</button>
          <button style={{backgroundColor:"#fff", color:"black", padding: 6 }} className="custom-button rounded-lg hover:bg-gray-200  " onClick={clearPassword}>Clear</button>

        </div>
        
      
        
      </div>
    </div>
  );
}

export default App;
