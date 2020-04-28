import React, {Component} from "react";
import axios from "axios";
import $ from "jquery";
import Modal from "../component/Modal";
import Toast from "../component/Toast";

class StokBahan extends Component {
  constructor() {
    super();
    this.state = {
      bahan: [],
      id_bahan: "",
      nama: "",
      stok: "",
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
                <h4 className="text-white">Data Stok Bahan</h4>
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
                      <th>ID Bahan Baku</th>
                      <th>Nama Bahan Baku</th>
                      <th>Stok</th>
                      <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { this.state.bahan.map((item) => {
                  return(
                    <tr key={item.id_bahan}>
                      <td>{item.nama}</td>
                      <td>{item.stok}</td>
                        <button className="m-1 btn btn-sm btn-info" onClick={() => this.Edit(item)}>
                          <span className="fa fa-edit"></span>
                        </button>
                        <button className="m-1 btn btn-sm btn-danger"
                          onClick={() => this.Drop(item.id_bahan)}>
                          <span className="fa fa-trash"></span>
                        </button>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* tombol tambah */}
              <button className="btn btn-success my-2" onClick={this.Add}>
                <span className="fa fa-plus"></span> Tambah Bahan
              </button>

            {/* form modal bahan*/}
              <Modal id="modal_bahan" title="Form Bahan" bg_header="success" text_header="white">
                <form onSubmit={this.Save}>
                  ID Bahan Baku
                  <input type="text" className="form-control" name="id_bahan" value={this.state.id_bahan}
                      onChange={this.bind} required />
                    Nama Bahan Baku
                  <input type="text" className="form-control" name="nama"
                      value={this.state.nama} onChange={this.bind} required />
                    Stok
                  <input type="text" className="form-control" name="stok"
                      value={this.state.stok} onChange={this.bind} required />
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


export default StokBahan;
