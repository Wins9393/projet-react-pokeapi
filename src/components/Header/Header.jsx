import { Link } from "react-router-dom";
import { Menu, Modal, Button } from "antd";
import React, { useState } from "react";
import ContactForm from "../ContactForm";
import "./Header.css";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 1000);
  };
  return (
    <Menu mode="horizontal" className="header">
      <Menu.Item key="all pokemon">
        <Link to="/">All Pokemons</Link>
      </Menu.Item>
      <Menu.Item key="by type">
        <Link to="/type">By Type</Link>
      </Menu.Item>
      <Menu.Item key="favorites">
        <Link to="/favorites">Favorites</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Button type="primary" onClick={() => setVisible(true)}>
          Contact me
        </Button>
        <Modal
          title="Contact form"
          centered
          visible={visible}
          width={720}
          footer={[
            <Button key="back" onClick={() => setVisible(false)}>
              Return
            </Button>,
          ]}
        >
          <ContactForm />
        </Modal>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
