import { useState } from "react";
import { db } from "./FireBaseApp.js"
import { addDoc, collection } from "firebase/firestore"

export default function FirbaseCRUD() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(name,email);

  async function addUser(e) {
    e.preventDefault()
    const user = { name, email}
    await addDoc(collection(db,"Users"),user);
    setEmail("")
    setName("")
    console.log(user);
    
  }
  
  return (
    <div className="FireBaseCRUD">
      <h1>FireBase CRUD Project</h1>
      <form>
        <div>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name"
          value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input type="text" id="email"
          value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <button onClick={addUser}>Submit</button>
      </form>
    </div>
  );
}
