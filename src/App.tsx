import { useState } from "react";
import "./App.css";
import Carousel from "./component/Carousel";
import Nav from "./component/Nav";
import Post from "./component/Post";
import Footer from "./component/Footer";
function App() {
  return (
    <div>
      <Nav />
      <Carousel />
      <Post
        title={"Qatar world cup"}
        imgUrl={
          "https://cdn.mos.cms.futurecdn.net/Uy2oLCTFTGAFbUp5mg2Q3H-1200-80.jpg.webp"
        }
        desc={`Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Sit, voluptates deleniti. Aspernatur ex sit fugiat nisi nihil,
            mollitia totam qui odit porro dignissimos dolorem veritatis quae,
            quas nemo nostrum quasi!`}
      />
      <Post
        title={"Argentina are the champions!"}
        imgUrl={"https://static.dw.com/image/64143263_1006.jpg"}
        desc={`Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Sit, voluptates deleniti. Aspernatur ex sit fugiat nisi nihil,
                mollitia totam qui odit porro dignissimos dolorem veritatis quae,
                quas nemo nostrum quasi!`}
      />
      <Post
        title={"Saudi Arabia’s win is the greatest upset in World Cup history"}
        imgUrl={
          "https://digitalhub.fifa.com/transform/4d9bf462-4aca-43a2-91ff-5dc5690d6236/ARG_KSA_C_FWC22_3_hero16x9"
        }
        desc={`Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Sit, voluptates deleniti. Aspernatur ex sit fugiat nisi nihil,
                mollitia totam qui odit porro dignissimos dolorem veritatis quae,
                quas nemo nostrum quasi!`}
      />
      <Post
        title={"Morocco To the semi final of the world cup"}
        imgUrl={
          "https://www.insidesport.in/wp-content/uploads/2022/12/GetPaidStock.com-6394aa00ae3ec.jpg"
        }
        desc={`Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Sit, voluptates deleniti. Aspernatur ex sit fugiat nisi nihil,
                mollitia totam qui odit porro dignissimos dolorem veritatis quae,
                quas nemo nostrum quasi!`}
      />
      <Footer/>
    </div>
  );
}

export default App;
