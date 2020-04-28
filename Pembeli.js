import React, {Component} from "react";
import axios from "axios";
import $ from "jquery";
import Modal from "../component/Modal";
import Toast from "../component/Toast";

class Pembeli extends Component {
  constructor() {
    super();
    this.state = {
      pembeli: [],
      id_pembeli: "",
      nama: "",
      user: "",
      nohp: "",
      action: "",
      find: "",
      message: ""
    }
  }

  render(){
    return(
      <div className="container">
        <div className="card mt-2">
          {/* header card */}
          <div className="card-header bg-dark">
            <div className="row">
              <div className="col-sm-8">
                <h4 className="text-white">Data Pembeli</h4>
              </div>
              <div className="col-sm-4">
                <input type="text" className="form-control" name="find"
                  onChange={this.bind} value={this.state.find} onKeyUp={this.search}
                  placeholder="Pencarian..." />
              </div>
            </div>

          </div>
          {/* content card */}
          <div className="card-body">
            <Toast id="message" autohide="true" title="Informasi">
              {this.state.message}
            </Toast>
            <Toast id="loading" autohide="false" title="Informasi">
              <span className="fa fa-spin fa-spinner"></span> Sedang Memuat
            </Toast>
            <table className="table">
              <thead>
                <tr>
                      <th>ID Pembeli </th>
                      <th>Nama</th>
                      <th>Username</th>
                      <th>No HP</th>
                      <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { this.state.pembeli.map((item) => {
                  return(
                    <tr key={item.id_pesanan}>
                      <td>{item.nama}</td>
                      <td>{item.user}</td>
                      <td>{item.nohp}</td>
                        <button className="m-1 btn btn-sm btn-info" onClick={() => this.Edit(item)}>
                          <span className="fa fa-edit"></span>
                        </button>
                        <button className="m-1 btn btn-sm btn-danger"
                          onClick={() => this.Drop(item.id_pembeli)}>
                          <span className="fa fa-trash"></span>
                        </button>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* tombol tambah */}
              <button className="btn btn-success my-2" onClick={this.Add}>
                <span className="fa fa-plus"></span> Tambah Pembeli
              </button>

            {/* form modal pembeli*/}
              <Modal id="modal_produk" title="Form Produk" bg_header="success" text_header="white">
                <form onSubmit={this.Save}>
                  ID Pembeli
                  <input type="text" className="form-control" name="id_pembeli" value={this.state.id_pembeli}
                      onChange={this.bind} required />
                    Nama
                  <input type="text" className="form-control" name="nama"
                      value={this.state.nama} onChange={this.bind} required />
                    Username
                  <input type="text" className="form-control" name="user"
                      value={this.state.stok} onChange={this.bind} required />
                    No HP
                  <input type="text" className="form-control" name="nohp"
                      value={this.state.nohp} onChange={this.bind} required />
                  <button type="submit" className="btn btn-info pull-right m-2">
                    <span className="fa fa-check"></span> Simpan
                  </button>
                </form>
              </Modal>
            </div>
          </div>

        </div>
      );
    }
  }


export default Pembeli;
