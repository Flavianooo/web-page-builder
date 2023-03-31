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

  const setHeaderBackgroundColor = (val) => {
    setHeaderData({
      ...headerData,
      headerBackground: val,
    });
    localStorage.setItem(
      "headerSettings",
      JSON.stringify({ ...headerData, headerBackground: val })
    );
  };

  const setHeaderWidth = (val) => {
    val = val + "%";
    setHeaderData({
      ...headerData,
      headerWidth: val,
    });
    localStorage.setItem(
      "headerSettings",
      JSON.stringify({ ...headerData, headerWidth: val })
    );
  };

  const setHeaderHeight = (val) => {
    val = val + "px";
    setHeaderData({
      ...headerData,
      headerHeight: val,
    });
    localStorage.setItem(
      "headerSettings",
      JSON.stringify({ ...headerData, headerHeight: val })
    );
  };

  return (
    <div className={style.container}>
      <h5>Header</h5>
      <button className="btn bg-light lg:px-4 px-2 lg:ps-4 ps-2 pt-1 pb-1 outline">
        Layout
      </button>
      <button
        onClick={openPopup}
        id="header"
        className="btn bg-light lg:px-4 px-2 lg:ps-4 ps-2 pt-1 pb-1 outline"
      >
        Background & Width
      </button>
      <button className="btn bg-light lg:px-4 px-2 lg:ps-4 ps-2 pt-1 pb-1 outline">
        Menu
      </button>
      <button className="btn bg-light lg:px-4 px-2 lg:ps-4 ps-2 pt-1 pb-1 outline">
        Image
      </button>
      <button className="btn bg-light lg:px-4 px-2 lg:ps-4 ps-2 pt-1 pb-1 outline">
        Text
      </button>
      <Modal modalId={"header-background"}>
        <Form>
          <ModalDisableButton />
          <FormInput
            label={"Header Background Color"}
            type={"text"}
            value={headerData.headerBackground}
            onChange={setHeaderBackgroundColor}
          ></FormInput>
          <HexColorPicker
            value={headerData.headerBackground}
            onChange={setHeaderBackgroundColor}
          ></HexColorPicker>
          <br />
          <FormInput
            type={"range"}
            label={"Header Width"}
            min={"1"}
            max={"100"}
            value={headerData.headerWidth?.slice(0, -1)}
            onChange={setHeaderWidth}
          ></FormInput>

          <FormInput
            type={"range"}
            label={"Header Height"}
            min={"1"}
            max={"120"}
            value={headerData.headerHeight?.slice(0, -2)}
            onChange={setHeaderHeight}
          ></FormInput>
        </Form>
      </Modal>
    </div>
  );
}
