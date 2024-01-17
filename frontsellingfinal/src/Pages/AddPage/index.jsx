import React, { useEffect, useState } from "react";
import "./style.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { cardDelete, cardPost } from "../../Service/cardCrud";
import { Helmet } from "react-helmet-async";

const AddPage = () => {
  const [search, setSearch] = useState("");
  const [property, setProperty] = useState(null);
  const [api, setApi] = useState([]);
  async function getapi() {
    await fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }
  useEffect(() => {
    getapi();
  }, []);

  async function handleDelete(id) {
    await cardDelete(id);
    await getapi();
  }

  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <section className="addPage">
        <div className="addPage__container">
          <div className="addPage__container__formik">
            <Formik
              initialValues={{
                img: "",
                title: "",
                rating: "",
                like: "",
                description: "",
              }}
              validationSchema={Yup.object({
                img: Yup.string().min(1, "too short").required("Required"),
                title: Yup.string().min(1, "too short").required("Required"),
                rating: Yup.number().required("Required"),
                like: Yup.number().required("Required"),
                description: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  cardPost(values);
                  getapi();
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form>
                <div>
                  <label htmlFor="img">Image</label>
                  <Field name="img" type="text" />
                  <ErrorMessage name="img" />
                </div>

                <div>
                  <label htmlFor="title">Title</label>
                  <Field name="title" type="text" />
                  <ErrorMessage name="title" />
                </div>

                <div>
                  <label htmlFor="rating">rating</label>
                  <Field name="rating" type="number" />
                  <ErrorMessage name="rating" />
                </div>
                <div>
                  <label htmlFor="like">❤</label>
                  <Field name="like" type="number" />
                  <ErrorMessage name="like" />
                </div>

                <div>
                  <label htmlFor="description">description</label>
                  <Field name="description" type="text" />
                  <ErrorMessage name="description" />
                </div>
                <button type="submit">Submit</button>
              </Form>
            </Formik>
          </div>
          <hr />
          <div className="addPage__container__table">
            <input
              placeholder="Search..."
              value={search}
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={() =>
                setProperty({ choosenProperty: "title", asc: true })
              }
            >
              a-Z
            </button>
            <button
              onClick={() =>
                setProperty({ choosenProperty: "title", asc: false })
              }
            >
              Z-a
            </button>
            <button onClick={() => setProperty(null)}>Default</button>
            <table>
              <thead>
                <th>Image</th>
                <th>Title</th>
                <th>Rating</th>
                <th>Like</th>
                <th>Description</th>
                <th>Delete</th>
              </thead>
              <tbody>
                {api
                  .filter((x) =>
                    x.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .sort((a, b) => {
                    if (property && property.asc === true) {
                      return a[property.choosenProperty] >
                        b[property.choosenProperty]
                        ? 1
                        : b[property.choosenProperty] >
                          a[property.choosenProperty]
                        ? -1
                        : 0;
                    } else if (property && property.asc === false) {
                      return a[property.choosenProperty] <
                        b[property.choosenProperty]
                        ? 1
                        : b[property.choosenProperty] <
                          a[property.choosenProperty]
                        ? -1
                        : 0;
                    } else {
                      return 0;
                    }
                  })
                  .map((x) => {
                    return (
                      <tr key={x._id}>
                        <td>
                          <img src={x.img} alt="" />
                        </td>
                        <td>{x.title}</td>
                        <td>{x.rating}🎇</td>
                        <td>{x.like}❤</td>
                        <td>{x.description.slice(0, 11)}</td>
                        <td>
                          <button onClick={() => handleDelete(x._id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddPage;
