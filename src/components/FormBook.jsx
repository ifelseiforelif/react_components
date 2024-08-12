import { useState } from "react";
import "./FormBook.css";
export const FormBook = ({ books, action }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    action((books) => [
      ...books,
      {
        id: books.length + 1,
        title,
        description: desc,
        img: image,
      },
    ]);
    setTitle("");
    setDesc("");
    setImage("");
  };

  return (
    <form className="w-50 mx-auto mb-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputTitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          value={title}
          className="form-control"
          id="exampleInputTitle"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-floating">
        Desciption
        <textarea
          value={desc}
          className="form-control"
          id="exampleInputDesc"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputImage" className="form-label">
          Image
        </label>
        <input
          value={image}
          type="text"
          className="form-control"
          id="exampleInputImage"
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
