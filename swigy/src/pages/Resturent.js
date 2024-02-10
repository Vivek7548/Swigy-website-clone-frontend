import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/pages/images/swiglogo.png";
import offer from "@/pages/images/offer.svg";
import call from "@/pages/images/call.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import rating from "@/pages/images/rating.svg";

function Resturent() {
  const [name, setName] = useState("Veg");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/data")
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    <div>
      <div className="navbar navbar-expand-lg fixed-top bg-light mb-5">
        <div className="container">
          <div className="navbar-brand">
            <Link href={"/"}>
              <Image src={logo} alt="logo" width={65} height={45} priority />
            </Link>
          </div>
          <div className="area">
            <select
              style={{
                border: "none",
                width: "250px",
                background: "transparent",
              }}
            >
              <option>Pune</option>
              <option>Delhi</option>
              <option>Goa</option>
              <option>Daman</option>
              <option>Surat</option>
              <option>Chennai</option>
            </select>
          </div>

          <div className="navbar-nav">
            <li className="list-item">
              <Image src={offer} alt="offer" width={25} />
              <span>Offers</span>
            </li>
            <li className="list-item ms-5">
              <Image src={call} alt="call" width={25} />
              <span>Call</span>
            </li>
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* Rating Page  */}

      <section className="rating mt-5 mb-5">
        <div className="container">
          <div className="resturent-details">
            <div className="float-end">
              <Image src={rating} width={25} alt="rating" />
              &nbsp; 1k +rating
            </div>
            <h4>Wow! Momo</h4>
            <p>Tibetan, Healthy food </p>
            <p>3 kms | Rs.43 Delivery fee will apply</p>
            <div
              className="dotted-line mt-5 "
              style={{ border: "1px dotted grey" }}
            ></div>
          </div>
        </div>
      </section>

      {/* Resturent -menu - details */}
      <section className="menu">
        <div className="container">
          <h1>{name}</h1>
          <button
            className="btn btn-outline-primary rounded-pill"
            onClick={() => {
              setName((prevItem) => (prevItem === "Veg" ? "Non Veg" : "Veg"));
            }}
          >
            Change
          </button>
          {data.map((item) => (
            <div key={item.id}>
              <div className="card mt-5" style={{ border: "none" }}>
                <Image src={item.image} height={125} width={155} />3
                <div className="card-body">
                  <h5>{item.title}</h5>
                  <p>{item.price}</p>
                  <p>{item.text}</p>
                </div>
              </div>
              <div className='dotted-line mt-5 ' style={{border: '1px dotted grey'}}></div>

            </div>
            
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resturent;
