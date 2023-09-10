
import { useState } from "react";
import FormLayout from './FormLayout/FormLayout';
import MainMenu from './MainMenu/MainMenu';
import './Style/style.css';  // Your custom CSS

export default function MainView() {
  const [name, setName] = useState("");

  return (
    <>
      <MainMenu />
      <FormLayout />

    </>
  );
}
