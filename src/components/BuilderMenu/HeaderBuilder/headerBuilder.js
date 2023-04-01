import Modal from "@/components/Modal/modal";
import style from "./headerBuilder.module.scss";
import Form from "@/components/Form/form";
import FormInput from "@/components/Form/FormInput/formInput";
import { HexColorPicker } from "react-colorful";
import hideAllPopups from "@/utils/hidePopups";
import ModalDisableButton from "@/components/Modal/ModalDisableButton/modalDisableButton";
import Tabs from "@/components/Tabs/tabs";
import Tab from "@/components/Tabs/Tab/tab";
import { useState } from "react";
import TabSelection from "@/components/Tabs/TabSelection/tabSelection";

export default function HeaderBuilder({ headerData, setHeaderData }) {
  // useEffect(() => {
  //   const { Droppable } = require("@shopify/draggable");

  //   let containers = document.querySelectorAll(".draggableContainer");

  //   const textElement = new Droppable(containers, {
  //     draggable: ".draggable-text--isDraggable",
  //     dropzone: ".page-header--isDropzone",
  //     mirror: {
  //       constrainDimensions: true,
  //     },
  //   });

  //   let droppableOrigin;

  //   // --- Draggable events --- //
  //   textElement.on("drag:start", (evt) => {
  //     droppableOrigin = evt.originalSource.parentNode.dataset.dropzone;
  //     const { dragEvent } = evt;
  //     const { mirror, source } = dragEvent;
  //     mirror.classList.add("defaultMirror");

  //     // Add drag class to the source element.
  //     source.classList.add("dragging-element");
  //   });

  //   textElement.on("droppable:dropped", (evt) => {
  //     if (droppableOrigin !== evt.dropzone.dataset.dropzone) {
  //       evt.cancel();
  //     }
  //   });

  //   textElement.on("droppable:stop", (evt) => {
  //     console.log(evt);
  //   });
  // }, []);

  const openPopup = (e) => {
    hideAllPopups();
    const id = e.target.id;
    if (id === "header-settings") {
      document.getElementById("header-background")?.classList.toggle("hidden");
    }
  };

  const saveHeaderSettings = (key, val) => {
    localStorage.setItem(
      "headerSettings",
      JSON.stringify({ ...headerData, [key]: val })
    );
  };

  const setHeaderPrimaryTextColor = (val) => {
    setHeaderData({
      ...headerData,
      headerPrimaryTextColor: val,
    });
    saveHeaderSettings("headerPrimaryTextColor", val);
  };

  const setHeaderFontSize = (val) => {
    val = val + "px";
    setHeaderData({
      ...headerData,
      headerFontSize: val,
    });
    saveHeaderSettings("headerFontSize", val);
  };

  const setHeaderBackgroundColor = (val) => {
    setHeaderData({
      ...headerData,
      headerBackground: val,
    });
    saveHeaderSettings("headerBackground", val);
  };

  const setHeaderWidth = (val) => {
    val = val + "%";
    setHeaderData({
      ...headerData,
      headerWidth: val,
    });
    saveHeaderSettings("headerWidth", val);
  };

  const setHeaderHeight = (val) => {
    val = val + "px";
    setHeaderData({
      ...headerData,
      headerHeight: val,
    });
    saveHeaderSettings("headerHeight", val);
  };

  const setHeaderAlignLeft = () => {
    setHeaderData({
      ...headerData,
      headerAlign: "left",
    });
    saveHeaderSettings("headerAlign", "flex-start");
  };

  const setHeaderAlignCenter = () => {
    setHeaderData({
      ...headerData,
      headerAlign: "center",
    });
    saveHeaderSettings("headerAlign", "center");
  };

  const setHeaderAlignRight = () => {
    setHeaderData({
      ...headerData,
      headerAlign: "right",
    });
    saveHeaderSettings("headerAlign", "flex-end");
  };

  const [activeTab, setActiveTab] = useState("header-design");

  const activateTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      id="header-builder"
      className={`${style.container} draggableContainer`}
    >
      <button className="lg:ml-6 btn bg-light lg:px-4 px-2 lg:ps-4 ps-2 pt-1 pb-1 outline">
        Layout
      </button>
      <button
        onClick={openPopup}
        id="header-settings"
        className="btn bg-light lg:px-4 px-2 lg:ps-4 ps-2 pt-1 pb-1 outline"
      >
        Styling
      </button>
      <button className="btn bg-light lg:px-4 px-2 lg:ps-4 ps-2 pt-1 pb-1 outline">
        Menu
      </button>
      <button className="btn bg-light lg:px-4 px-2 lg:ps-4 ps-2 pt-1 pb-1 outline">
        Image
      </button>
      <div className="page-header--isDropzone" data-dropzone="1">
        <button className="draggable-text--isDraggable btn bg-light lg:px-4 px-2 lg:ps-4 ps-2 pt-1 pb-1 outline">
          Text
        </button>
      </div>
      <Modal modalId={"header-background"}>
        <Tabs>
          <TabSelection
            activeTab={activeTab}
            setActiveTab={activateTab}
            tabs={[
              ["header-design", "Header Design"],
              ["typography", "Typography"],
            ]}
          />
          <Tab activeTab={activeTab} id="header-design">
            <Form>
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
              <div className={style.splitButtons}>
                <button type="button" onClick={setHeaderAlignLeft}>
                  Align Left
                </button>
                <button type="button" onClick={setHeaderAlignCenter}>
                  Align Center
                </button>
                <button type="button" onClick={setHeaderAlignRight}>
                  Align Right
                </button>
              </div>
            </Form>
          </Tab>
          <Tab activeTab={activeTab} id="typography">
            <Form>
              <FormInput
                label={"Header Primary Text Color"}
                type={"text"}
                value={headerData.headerPrimaryTextColor}
                onChange={setHeaderPrimaryTextColor}
              ></FormInput>
              <HexColorPicker
                value={headerData.headerPrimaryTextColor}
                onChange={setHeaderPrimaryTextColor}
              ></HexColorPicker>
              <br />
              <FormInput
                label={"Header Font Size"}
                type={"range"}
                min={"8"}
                max={"100"}
                value={headerData.headerFontSize?.slice(0, -2)}
                onChange={setHeaderFontSize}
              />
            </Form>
          </Tab>
        </Tabs>
      </Modal>
    </div>
  );
}
