import React from "react";
import "./App.css";
function App() {
  return (
    <div class="parent">
      <div class="face">
        <center>
          <font color="blue">
            {" "}
            <h1>facebook</h1>
          </font>
          <h2>
            Facebook helps you connect and share<br></br> with the people in
            your life.
          </h2>
        </center>
      </div>

      <div class="book">
        <div className="input">
          <label htmlFor="fname">email</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="email address or phone"
          />
        </div>
        <div className="input">
          <label htmlFor="password">password</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="password"
          />
        </div>

        <input class="button" type="submit" value="login"></input>

        <a
          href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzQ4NDk1NzY2LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&amp;ars=facebook_login&amp;next"
          id="u_0_6_xq"
        >
          Forgotten password?
        </a>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default App;
