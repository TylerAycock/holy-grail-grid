import "./App.css";
import one from "./assets/images/banner.png";

function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>The Fog Wall</h1>
      </header>
      <div className="column one">
        <p className="title">
          <strong>Categories:</strong>
        </p>
        <a href="">Film & Cinema</a>
        <a href="">Books & Reading</a>
        <a href="">Games & Consoles</a>
        <a href="">Food & Drinks</a>
        <a href="">World News</a>
        <a href="">Outdoor Living</a>
      </div>
      <div className="column two">
        <h2 className="article-title">The Best Five Open World Adventure Games</h2>
        <img src={one} alt="adventure man" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque autem
          inventore odio cum ea tenetur placeat quibusdam, ex aliquid mollitia
          facilis nemo doloribus nisi, at officiis amet eius nam exercitationem!
          Dolores asperiores odit recusandae qui distinctio! Fuga accusantium
          iure dolor iste aut itaque, commodi, a rerum ducimus minus error
          libero fugiat earum aliquam perspiciatis eaque quidem, architecto ipsa
          voluptatem repellat. Facere earum, ratione veniam magni dicta beatae
          ducimus doloremque eaque pariatur id magnam voluptas consequatur vel
          minima corrupti culpa delectus possimus dolorem tempore perferendis
          molestiae! Quo pariatur voluptate similique reprehenderit? Illo culpa
          soluta accusamus facere sed dicta aperiam aliquid. Officia fuga
          molestiae perferendis omnis, quasi iste enim maiores. Eveniet,
          voluptates blanditiis. Nobis architecto, sit voluptatibus incidunt
          possimus asperiores dolorum? Laborum. Nam, praesentium est. Voluptatum
          consequatur eum debitis iure reprehenderit quas eveniet repellendus
          sint tempora asperiores! Ab sequi sit, nisi inventore totam laudantium
          in corporis atque, perspiciatis ipsa magnam provident consectetur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque autem
          inventore odio cum ea tenetur placeat quibusdam, ex aliquid mollitia
          facilis nemo doloribus nisi, at officiis amet eius nam exercitationem!
          Dolores asperiores odit recusandae qui distinctio! Fuga accusantium
          iure dolor iste aut itaque, commodi, a rerum ducimus minus error
          libero fugiat earum aliquam perspiciatis eaque quidem, architecto ipsa
          voluptatem repellat. Facere earum, ratione veniam magni dicta beatae
          ducimus doloremque eaque pariatur id magnam voluptas consequatur vel
          minima corrupti culpa delectus possimus dolorem tempore perferendis
          molestiae! Quo pariatur voluptate similique reprehenderit? Illo culpa
          soluta accusamus facere sed dicta aperiam aliquid. Officia fuga
          molestiae perferendis omnis, quasi iste enim maiores. Eveniet,
          voluptates blanditiis. Nobis architecto, sit voluptatibus incidunt
          possimus asperiores dolorum? Laborum. Nam, praesentium est. Voluptatum
          consequatur eum debitis iure reprehenderit quas eveniet repellendus
          sint tempora asperiores! Ab sequi sit, nisi inventore totam laudantium
          in corporis atque, perspiciatis ipsa magnam provident consectetur.
        </p>
      </div>
      <div className="column three">
        <ul>
          <li className="cat-title">
            <strong>Published On:</strong>
          </li>
          <li>October 12th, 2023</li>
          <li className="cat-title">
            <strong>Category:</strong>
          </li>
          <li>Games & Console</li>
          <li className="cat-title">
            <strong>Written By:</strong>
          </li>
          <li>Tyler Aycock</li>
        </ul>
      </div>
      <footer>Copyright 2023 The Fog Wall</footer>
    </div>
  );
}

export default App;
