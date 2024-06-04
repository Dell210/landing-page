import { useState } from 'react';
import './App.css'

function App() {
  let [name, setName] = useState<string>();
  let [cpf, setCpf] = useState<string>();
  let [adress, setAdress] = useState<string>();
  let [tel, setTel] = useState<string>();
  let [country, setCountry] = useState<string>();
  
  return (
    <>
    <section>
      <form action="submit">
        <fieldset>
          <label htmlFor="">Nome:</label>
          <input name='name' type="text" onChange={(e)=>setName(e.target.value)} value={name} />
        </fieldset>

        <fieldset>
          <label htmlFor="">CPF:</label>
          <input name='cpf' type="text" onChange={(e)=>setCpf(e.target.value)} value={cpf} />
        </fieldset>

        <fieldset>
          <label htmlFor="">Telefone</label>
          <input name='tel' type="text" onChange={(e)=>setName(e.target.value)} value={name} />
        </fieldset>

        <fieldset>
          <label htmlFor="">Endereço</label>
          <input name='Adress' type="text" onChange={(e)=>setName(e.target.value)} value={name} />
        </fieldset>

        <fieldset>
          <label htmlFor="">Cidade</label>
          <input name='country' type="text" onChange={(e)=>setName(e.target.value)} value={name} />
        </fieldset>

        <button type="submit">Enviar</button>


      </form>
    </section>
    </>
    
  )
}

export default App
