import React, {Component} from "react";
import axios from "axios";
import Toast from "../component/Toast";
import $ from "jquery";

class LoginPembeli extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      mesage: ""
    }
  }

  bind = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  Login = (event) => {
    event.preventDefault();
    let url = "http://localhost/pelanggaran_sekolah/public/user/auth";
    let form = new FormData();
    form.append("username", this.state.username);
    form.append("password", this.state.password);
    axios.post(url, form)
    .then(response => {
      let logged = response.data.status;
      if (logged) {
        this.setState({message: "Login Berhasil"});
        // menyimpan data token pada local storage
        localStorage.setItem("Token", response.data.token);
        // menyimpan dat login user ke local storage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // direct ke hlm data siswa
        window.location = "/siswa";
      } else {
        this.setState({message: "Login Gagal"});
      }
      $("#message").toast("show");
    })
    .catch(error => {
      console.log(error);
    })
  }

 render() {
       return (
         <div className="container" style={{width: "35%"}}>
       <div className="card my-2">

         <div className="card-header bg-info">
         <p class="text-center"><h4><p class="text-light">JATEAM</p></h4></p>
         </div>
         <div className="card-body bg-dark">
           <Toast id="message" autohide="false" title="Informasi">
             {this.state.message}
           </Toast>
           <form>


               <div className="form-group">
                   <label class="text-light">Username</label>
                   <input type="text" className="form-control bg-light" placeholder="Enter username" />
               </div>

               <div className="form-group">
                   <label class="text-light">Password</label>
                   <input type="password" className="form-control bg-light" placeholder= "Enter password " />
               </div>



               <button className="mt-2 btn btn-block btn-secondary" type="submit">
                <span className="fa fa-sign-in"></span> Login
             </button>
             <div class="text-center forget" >
             <p class="text-light">Belum punya akun? <a href="#" class="text-primary border-primary border-bottom"> Daftar disini</a></p>
           </div>


           </form>
           </div>
       </div>
     </div>

       );
   }

}
export default LoginPembeli;
