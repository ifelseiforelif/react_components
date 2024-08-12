import reactLogo from "./assets/react.svg";
import goodDay from "../public/good_day.jfif";
import "./App.css";
import { Book } from "./components/Book";
import data from "./models/data.json";
import { useState } from "react";
import { FormBook } from "./components/FormBook";

function App() {
  const name = "My App";
  const [totalLike, setTotalLike] = useState(0);
  const [books, setBooks] = useState(data.cards);
  return (
    <>
      <div className="app">
        <div>
          <p>Hello {name}</p>
          <img src={goodDay} alt="react" />
          <p>Total Likes: {totalLike}</p>
        </div>
        <FormBook action={setBooks} books={books} />
        <div className="books">
          {books.map((el) => (
            <Book
              card={el}
              key={el.id}
              action={setTotalLike}
              value={totalLike}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
