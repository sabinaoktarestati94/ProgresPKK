import React, {Component} from "react";
import axios from "axios";
import Toast from "../component/Toast";
import $ from "jquery";

class LoginPeracik extends Component {
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

    render(){
   return(
     <div className="container" style={{width: "35%"}}>
       <div className="card my-2">
         <div className="card-header bg-info">
          <h3> <p class="text-center">Login Peracik</p> </h3>
         </div>
         <div className="card-body">
           <Toast id="message" autohide="false" title="Informasi">
             {this.state.message}
           </Toast>


           <form>
             <div class="form-group row">
               <div class="col-md-4">
                 <input type="text" class="form-control" placeholder="Enter username" name="nama" style={{width: "350%"}}/>
               </div>
             </div>
             <div class="form-group row">

               <div class="col-md-4">
                 <input type="text" class="form-control" placeholder="Enter password" name="nama" style={{width: "350%"}}/>
               </div>
             </div>
             <div className= "d-flex justify-content-center" >
             <button className="mt-2 btn btn-block btn-secondary" type="submit">
                 <span className="fa fa-sign-in"></span> Login
              </button>
            </div>

           </form>
         </div>
       </div>
     </div>
   );
 }

}
export default LoginPeracik;
