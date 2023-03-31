import Modal from "@/components/Modal/modal";
import style from "./headerBuilder.module.scss";
import Form from "@/components/Form/form";
import FormInput from "@/components/Form/FormInput/formInput";
import { HexColorPicker } from "react-colorful";
import hideAllPopups from "@/utils/hidePopups";
import ModalDisableButton from "@/components/Modal/ModalDisableButton/modalDisableButton";

export default function HeaderBuilder({ headerData, setHeaderData }) {
  const openPopup = (e) => {
    hideAllPopups();
    const id = e.target.id;
    if (id === "header") {
      document.getElementById("header-background")?.classList.toggle("hidden");
    }
  };

  return (
    <div className={style.container}>
      <h5>
        Header
        <br />
        Builder
      </h5>
      <button className="btn bg-light px-4 pt-1 pb-1 ps-4 outline">
        Layout
      </button>
      <button
        onClick={openPopup}
        id="header"
        className="btn bg-light px-4 pt-1 pb-1 ps-4 outline"
      >
        Background
      </button>
      <button className="btn bg-light px-4 pt-1 pb-1 ps-4 outline">Menu</button>
      <button className="btn bg-light px-4 pt-1 pb-1 ps-4 outline">
        Image
      </button>
      <button className="btn bg-light px-4 pt-1 pb-1 ps-4 outline">Text</button>
      <Modal modalId={"header-background"}>
        <ModalDisableButton />
        <Form>
          <FormInput
            label={"Header Background Color"}
            type={"text"}
            value={headerData.headerBackgroundColor}
          ></FormInput>
          <HexColorPicker></HexColorPicker>
        </Form>
      </Modal>
    </div>
  );
}
