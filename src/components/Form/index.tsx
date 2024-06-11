import { useState } from "react";
import "./style.css"

function Form() {
  const [name, setName] = useState<string>(``);
  const [cpf, setCpf] = useState<string>(``);
  const [adress, setAdress] = useState<string>(``);
  const [tel, setTel] = useState<number | string>(``);
  const [country, setCountry] = useState<string>(``);

  return (
    <>
      <section id="section-form">
        <form action="submit">
          <fieldset className="fieldset-form">
            <label htmlFor="">Nome:</label>
            <input
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="">CPF:</label>
            <input
              name="cpf"
              type="text"
              onChange={(e) => setCpf(e.target.value)}
              value={cpf}
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="">Telefone</label>
            <input
              name="tel"
              type="number"
              onChange={(e) => setTel(Number(e.target.value))}
              value={tel}
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="">Endereço</label>
            <input
              name="Adress"
              type="text"
              onChange={(e) => setAdress(e.target.value)}
              value={adress}
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="">Cidade</label>
            <input
              name="country"
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
          </fieldset>

          <button type="submit">Enviar</button>
        </form>

        {/*Tag usada para manter a mesma estrutura de texto digitada */}
        {/*<pre>
          {`
          Seu nome é ${name}         
          Seu cpf é ${cpf}
          voce mora no endereço ${adress}
          sua cidade é ${country}
          telefone é ${tel} `}
          </pre> */}

        <div></div>
      </section>
    </>
  );
}

export default Form;
