import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookMedical } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Home = ({setId}) => {
  
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [del, setDel] = useState([]);

  // Use Effect Hook :
  useEffect(() => {
    fetchData();
  }, [del]);

  // Show all Book and Authors function:
  const fetchData = async () => {
    await axios
      .get("https://66fe20446993693089572358.mockapi.io/api/Books")
      .then((res) => setBooks(res.data))
      .catch((error) => console.log(error));
  };

  // Books Edit Function :
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  // Books and Author data Delete function:
  const handleDel = async (id) => {
    await axios
      .delete(`https://66fe20446993693089572358.mockapi.io/api/Books/${id}`)
      .then((res) => setDel(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mb-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/*  The given API products are mapping and using cards: */}

        {books.map((element, index) => {
          return (
            <div key={index}>
              <div className="col border border-dark rounded-2 h-100">
                <div className="card text-center bg-dark text-white">
                  <div className="card-header  text-bg-primary p-2">
                    <h4>
                      <strong>
                        <u>Book</u>
                      </strong>
                    </h4>
                  </div>
                  <h4 className="mt-2">
                    {element.id}. Book-Title : {element.title}
                  </h4>
                  <div className="card-body">
                    <h5 className="card-title text-warning">
                      Author : {element.author}
                    </h5>
                    <p className="card-text"> ISBN Number : {element.isbn}</p>
                    <p className="card-text"> Publish Date : {element.pDate}</p>
                  </div>
                  <h4 className=" bg-success p-3">
                    <strong>
                      <u>Author</u>
                    </strong>
                  </h4>
                  <h5 className="mt-2 text-warning">
                    Author Name : {element.author}
                  </h5>
                  <p className="card-text"> Birth Date : {element.bDate}</p>
                  <p className="card-text mb-2"> Biography : {element.bio}</p>

                  {/* Edit and Delete buttons  */}
                  <div className="my-3">
                    <button
                      className="btn btn-success me-5"
                      onClick={() => {
                        handleEdit(element.id);
                      }}
                    >
                      <FaBookMedical size={"20px"} className="mb-1" /> Edit
                    </button>

                    <button
                      className="btn btn-danger "
                      onClick={() => {
                        handleDel(element.id);
                      }}
                    >
                      <MdDelete size={"20px"} className="mb-1" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
