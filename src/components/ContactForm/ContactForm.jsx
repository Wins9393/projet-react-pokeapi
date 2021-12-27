import { Input } from "antd";
import { Formik } from "formik";

import { UserOutlined, MailOutlined } from "@ant-design/icons";

const ContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ pseudo: "", email: "", message: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.pseudo) {
            errors.pseudo = "Required";
          }

          if (!values.message) {
            errors.message = "Required";
          }

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          window.location = `mailto:brechairevincent@gmail.com?subject=Merci pour ton travail Vincent :)&body=${values.message}`;
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="pseudo"
              size="large"
              placeholder="Your pseudo"
              prefix={<UserOutlined />}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.pseudo}
            />
            <br />
            <br />

            {errors.pseudo && touched.pseudo && errors.pseudo}
            <Input
              type="email"
              name="email"
              size="large"
              placeholder="Your Email address"
              prefix={<MailOutlined />}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <br />
            <br />

            {errors.email && touched.email && errors.email}
            <Input.TextArea
              rows={4}
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            <br />
            <br />

            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
