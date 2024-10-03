import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa6";

const Create = () => {
  const navigate = useNavigate();

  // Create a validation schema :
  const validationSchema = Yup.object().shape({
    id: Yup.string().required("ID should not be empty"),
    title: Yup.string().required("Title should not be empty"),
    author: Yup.string().required("Author Name should not be empty"),
    pDate: Yup.string().required("Publish Date should not be empty"),
    isbn: Yup.string().required("ISBN Number should not be empty"),
    bDate: Yup.string().required("Birth Date should not be empty"),
    bio: Yup.string().required("Biography should not be empty"),
  });

  // Using formik hook :
  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      author: "",
      pDate: "",
      isbn: "",
      bDate: "",
      bio: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await axios
        .post("https://66fe20446993693089572358.mockapi.io/api/Books/", values)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));
      navigate("/");
    },
  });

  return (
    <div className="container text-center mb-4">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <button
            className="btn btn-danger d-flex justify-content-end"
            type="submit"
          >
            <FaBookMedical size={"20px"} />
            Create
          </button>
        </div>
        <div className="row">
          <h3>
            <strong>
              <FaBook size={"30px"} className="mb-2" /> Book
            </strong>
          </h3>

          {/* Id */}
          <div className="col-6 col-sm-6 mb-5 ">
            <label className="form-label">ID</label>
            <input
              name="id"
              value={formik.values.id}
              onChange={formik.handleChange}
              type="text"
              className="form-control"
              placeholder="Enter Your ID"
            />
            <div className="text-danger mt-2">{formik.errors.id}</div>
          </div>

          {/* Book Title */}
          <div className="col-6 col-sm-6">
            <label className="form-label">Book Title</label>
            <input
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              type="text"
              className="form-control"
              placeholder="Enter Your Book title"
            />
            <div className="text-danger mt-2">{formik.errors.title}</div>
          </div>

          {/* Author */}
          <div className="col-6 col-sm-6 mb-5 ">
            <label className="form-label">Auhtor</label>
            <input
              name="author"
              value={formik.values.author}
              onChange={formik.handleChange}
              type="text"
              className="form-control"
              placeholder="Enter Your Auhtor"
            />
            <div className="text-danger mt-2">{formik.errors.author}</div>
          </div>

          {/* ISBN Number */}
          <div className="col-6 col-sm-6">
            <label className="form-label">ISBN Number</label>
            <input
              name="isbn"
              value={formik.values.isbn}
              onChange={formik.handleChange}
              type="text"
              className="form-control"
              placeholder="Enter Your ISBN Number"
            />
            <div className="text-danger mt-2">{formik.errors.isbn}</div>
          </div>

          {/* Publish Date */}
          <div className="col-6 col-sm-6 mb-5 ">
            <label className="form-label">Publish Date</label>
            <input
              name="pDate"
              value={formik.values.pDate}
              onChange={formik.handleChange}
              type="date"
              className="form-control"
              placeholder="Enter Your Publish Date"
            />
            <div className="text-danger">{formik.errors.pDate}</div>
          </div>
          <h3>
            <strong>
              <FaUser size={"30px"} className="mb-2" /> Author
            </strong>
          </h3>

          <div className="row">
            {/* Auhtor Name */}
            <div className="col-6 col-sm-6">
              <label className="form-label">Auhtor Name</label>
              <input
                name="author"
                value={formik.values.author}
                onChange={formik.handleChange}
                type="text"
                className="form-control"
                placeholder="Enter Your Auhtor Name"
              />
              <div className="text-danger mt-2">{formik.errors.author}</div>
            </div>

            {/* Birth Day */}
            <div className="col-6 col-sm-6 mb-5">
              <label className="form-label">Birth Date</label>
              <input
                name="bDate"
                value={formik.values.bDate}
                onChange={formik.handleChange}
                type="date"
                className="form-control"
                placeholder="Enter Your Birth Date"
              />
              <div className="text-danger mt-2">{formik.errors.bDate}</div>
            </div>

            {/* Biography */}
            <div className="col-6 col-sm-6 mb-5">
              <label className="form-label">Biography</label>
              <input
                name="bio"
                value={formik.values.bio}
                onChange={formik.handleChange}
                type="text"
                className="form-control"
                placeholder="Enter Your Bio"
              />
              <div className="text-danger mt-2">{formik.errors.bio}</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
