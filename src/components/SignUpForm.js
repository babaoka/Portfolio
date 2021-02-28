import React,{ useState } from 'react';
import '../App.css';
import './SignUpForm.css';

function SignUpForm({ Login, error }) {

  const [details, setDetails] = useState({name: "", email: "", password: ""});

  const submitHandler = e => {
    e.preventDefault();
    Login(details);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        {(error != "") ? ( <div className="error">{error}</div>) : ""}
        <p className="form-name">firebase上にName(admin),Email(admin@admin.com),Password(admin123)と登録されていてログインできます。</p>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        </div>
        <input type="submit" value="SIGN UPする" />
      </div>
    </form>
  );
};

export default SignUpForm;