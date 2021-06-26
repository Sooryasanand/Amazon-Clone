import React from 'react'
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
              <img className="home_image" src="https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_490,w_1600/https%3A%2F%2Fshowsnob.com%2Ffiles%2Fimage-exchange%2F2017%2F07%2Fie_70351-1.jpeg" alt=""/>
              
              <div className="home_row">
                <Product
                id="16327339" 
                title="LG 27UL850-W 27 Inch UHD 4K IPS Monitor, 5ms (GTG), HDMI, USB-C, HDR, Screen Split, Ergonomic Stand, Speaker, White" 
                price={549.00} 
                image="https://images-na.ssl-images-amazon.com/images/I/71UxNkZ7J4L._AC_SX522_.jpg" 
                rating={5} />
                <Product
                id="2346354" 
                title="Russell Hobbs RHSM700, 3-In-1 Classic Hand Blender, 2 Speed Settings + Pulse, Includes Beaker, Mini Chopper And Whisk, Black" 
                price={52.00} 
                image="https://images-na.ssl-images-amazon.com/images/I/619DthHtnZL._AC_SX679_.jpg" 
                rating={4} />
              </div>

              <div className="home_row">
                <Product
                id="2769034" 
                title="Sony WH1000XM3 Wireless Noise Cancelling Overhead Headphones, Black" 
                price={324.00} 
                image="https://images-na.ssl-images-amazon.com/images/I/71RDehnayYL._AC_SX522_.jpg" 
                rating={5} />
                <Product
                id="5892367" 
                title="Apple iPhone 8 Space Grey 64GB SIM-Free Smartphone (Renewed)" 
                price={275.00} 
                image="https://images-na.ssl-images-amazon.com/images/I/51GBMLDkn0L._AC_SY679_.jpg" 
                rating={5} />
                <Product
                id="8463434" 
                title="Apple iPhone 8 Space Grey 64GB SIM-Free Smartphone (Renewed)" 
                price={275.00} 
                image="https://images-na.ssl-images-amazon.com/images/I/51GBMLDkn0L._AC_SY679_.jpg" 
                rating={5} />
              </div>

              <div className="home_row">
                <Product
                id="66823289" 
                title="LG Ultragear 34GL750-B 34 Inch Curved WFHD IPS Gaming Monitor, 5ms (GTG) 1ms (MBR), 144Hz, HDMI, G-Sync Compatible, HDR10, Black" 
                price={649.00} 
                image="https://images-na.ssl-images-amazon.com/images/I/71TNmnADM6L._AC_SX522_.jpg" 
                rating={4} />
              </div>

            </div>
        </div>
    )
}

export default Home
