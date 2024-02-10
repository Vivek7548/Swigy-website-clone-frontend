import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import logo from "@/pages/images/swiglogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import offer from "@/pages/images/offer.svg";
import call from "@/pages/images/call.svg";
import burger from "@/pages/images/burger.jpg";
import biryani from "@/pages/images/biryani.jpg";
import chinese from "@/pages/images/chinese.webp";
import rolls from "@/pages/images/rolls.webp";
import pizza from '@/pages/images/pizza.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rating from '@/pages/images/rating.svg';
import styles from '@/styles/Home.module.css'



function index() {

  const [data, setData] = useState([]);

  const [search, setSearch] = useState('');



useEffect(()=>{
  fetch('http://localhost:3009/data')
  .then(resp=>resp.json())
  .then(json=>{
    console.log(json);
    setData(json);
  })
}, [])



  return (
    <div>
      <Head>
        <title>Swigy Application</title>
      </Head>

      {/* navbar */}

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
          {/* serchbar */}
          <div className="serchbar">
            <form>
              <input value={search} onChange={(e)=>{setSearch(e.target.value)}}  className="form-control" placeholder="Search...." />
            </form>
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
      {/* food-menu */}
      <section className="mt-5 food-menu mb-5">
        <div className="container">
          <div className="food-menu-heading">
            <h3>what's on your mind?</h3>
          </div>
          <div className="row mt-5 mb-5 ">
            <div className="col">
              <div className='card btn text-center' style={{width:'12rem', border:'none'}}>
              <Image src={rolls} className='card-img-top' height={165} width={'12rem'}/>
                <div className='card-text'>
                  <h4>Rolls</h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='card btn text-center' style={{width:'12rem', border:'none'}}>
              <Image src={chinese} className='card-img-top' height={165} width={'12rem'}/>
                <div className='card-text'>
                  <h4>Chinese</h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='card btn text-center' style={{width:'12rem', border:'none'}}>
              <Image src={pizza} className='card-img-top' height={165} width={'12rem'}/>
                <div className='card-text'>
                  <h4>Pizza</h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='card btn text-center' style={{width:'12rem', border:'none'}}>
              <Image src={burger} className='card-img-top' height={165} width={'12rem'}/>
                <div className='card-text'>
                  <h4>Burger</h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='card btn text-center' style={{width:'12rem', border:'none'}}>
              <Image src={biryani} className='card-img-top' height={165} width={'12rem'}/>
                <div className='card-text'>
                  <h4>Biryani</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='dotted-line' style={{border: '1px dotted grey'}}></div>
        </div>
      </section>


      {/* Resturant details */}
      <section className='resturent-details mt-3 mb-3'>
      <div className='container'>
              <div className='resturent-heading'>
                <h3>Resturents with online food delivery in Pune</h3>
              </div>
<div className='resturent mt-2'>
  <Row>
  {
    data.filter((item)=>{
      if(search=='')
      {
        return true;
      }
      else{
        return search.toLowerCase() === '' ? data :item.title.toLowerCase().includes(search);
      }

    }).map((item)=>(
      <Col key={item.id}>
      <Link href={'/Resturent'} style={{textDecoration: 'none', color:'black'}}>
      <div className={styles.card} style={{width:'12rem', border:'none'}}>
      <Image src={item.image} alt="resturent img" height={85} width={165} />
      <div className='card-body'>
      <div className='card-text'>
        <h5>{item.title}</h5>
        <span><Image src={rating} alt='rating' width={15}/>{item.ratings}</span>
        <p className='mt-2'>{item.time}</p>
        <p>{item.area}</p>
      </div>
      </div>
      </div>
</Link>
      </Col>
    ))
  }
  </Row>
</div>

      </div>
      </section>


    </div>
  );
}

export default index;
