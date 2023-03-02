import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { edituser } from "../JS/userSlice/userSlice";
import "./profil.css";

function Profil({ ping, setping }) {
  const reservation = useSelector(
    (state) => state.reservation?.reservationList
  );
  const user = useSelector((state) => state.user?.user);
  const [newuser, setnewuser] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="padding">
        <div className="col-md-8">
          {/* Column */}
          <div
            className="carduser"
            style={{ width: "1236px", marginLeft: "-216px" }}
          >
            {" "}
            <img
              className="card-img-top"
              src="https://as2.ftcdn.net/v2/jpg/01/21/28/79/1000_F_121287967_BadMkCnF1j5mMBua38TVNzTRql6xfy6h.jpg"
              alt="Card image cap"
            />
            <div className="card-body little-profile text-center">
              <div className="pro-img">
                <img src={user?.img} alt="user" />
              </div>
              <h3 className="m-b-0 h3">
                {user?.name} {user?.LastName}
              </h3>
              <p className="pp">{user?.email}</p>{" "}
              <a
                href="javascript:void(0)"
                className="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded"
                data-abc="true"
              >
                Follow
              </a>
              <div className="row text-center m-t-20">
                <div className="col-lg-4 col-md-4 m-t-20">
                  <h3 className="m-b-0 font-light h3">10434</h3>
                  <small>Articles</small>
                </div>
                <div className="col-lg-4 col-md-4 m-t-20">
                  <h3 className="m-b-0 font-light h3">434K</h3>
                  <small>Followers</small>
                </div>
                <div className="col-lg-4 col-md-4 m-t-20">
                  <h3 className="m-b-0 font-light h3">5454</h3>
                  <small>Following</small>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="first name"
                        defaultValue={user?.name}
                        onChange={(e) => {
                          setnewuser({ ...newuser, name: e.target.value });
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">Surname</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={user?.LastName}
                        placeholder="surname"
                        onChange={(e) => {
                          setnewuser({ ...newuser, LastName: e.target.value });
                        }}
                      />
                    </div>

                    {/*            
           <div className="col-md-12">
            <label className="labels">Postcode</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter address line 2"
              defaultValue=""
            />
          </div> 
           */}
                    <div className="col-md-12">
                      <label className="labels">Email ID</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter email id"
                        defaultValue={user?.email}
                        onChange={(e) => {
                          setnewuser({ ...newuser, email: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <button
                      style={{
                        backgroundColor: "#573b8a",
                        border: "none",
                        color: "white",
                      }}
                      className="btn btn-primary profile-button"
                      type="button"
                      onClick={() => {
                        dispatch(edituser({ id: user._id, newuser }));
                        setping(!ping);
                      }}
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center experience">
                    <h4 className="text-right">Réservations</h4>
                  </div>
                  <br />
                  <div className="col-md-12">
                    <Table striped bordered hover style={{ width: "673px" }}>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Product Name</th>
                          <th>Rervation Date</th>
                          <th>Price</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {reservation
                          ?.filter((el) => el.name == user.name)
                          .map((el) => (
                            <tr>
                              <td></td>
                              <td>{el.product}</td>
                              <td>{el.date}</td>
                              <td>{el.prix}</td>
                              <td>
                                <button
                                  style={{ width: "30px" }}
                                  // onClick={() => {
                                  //   dispatch(reservationdelete(el._id));
                                  //   dispatch(reservationget());
                                  //   dispatch(clientCurrent());
                                  //   setTimeout(() => {
                                  //     navigate("/profil");
                                  //   }, 1000);
                                  // }}
                                >
                                  X
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;

//  <button  onClick={() => {
//             setTimeout(() => {localStorage.removeItem("token");

//               navigate("/logi");
//             }, 1000);}} >logout</button>
