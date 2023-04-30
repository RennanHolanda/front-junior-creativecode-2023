import styles from "./Form.module.css";

// import { useState } from "react";
import { Link } from "react-router-dom";

import SubmitButton from "../Form/SubmitButton";

function FormLogin({btnText}) {
  return (
    <form id={styles.form_product}>
       <label htmlFor="user">Usuário</label>
      <input
        type="text"
        text="Usuário"
        name="name"
        placeholder="usuario@mail.com"
      /> <br />
       <label htmlFor="passwoard">Senha</label>
      <input
        type="password"
        text="Senha"
        name="password"
        placeholder="****************"
      />
      <div id={styles.area_btn}>
        <SubmitButton text={btnText} />
      </div><br />
      <div>
      <label htmlFor="register">Não tem uma conta?</label>
      <strong>
      <Link to={"/register"}>&nbsp;Registre-se</Link>
      </strong>
      </div>
    </form>
  );
}

export default FormLogin;
