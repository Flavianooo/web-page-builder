import Image from "next/image";
import seo from "/public/svgs/builder-menu/seo.svg";
import socialLinks from "/public/svgs/builder-menu/social-links.svg";
import style from "./metaOptions.module.scss";
import FormInput from "@/components/Form/FormInput/formInput";
import Form from "@/components/Form/form";
import Modal from "@/components/Modal/modal";

export default function MetaOptions({
  siteTitle,
  onSiteTitleChange,
  siteDescription,
  onSiteDescriptionChange,
}) {
  const submitChanges = (evt) => {
    evt.preventDefault();
    console.log("submit changes");
  };

  const openPopup = (evt) => {
    if (evt.target.id == "seo")
      document.getElementById("seo-modal")?.classList.toggle("hidden");
    else if (evt.target.id == "social-links") {
      document.getElementById("social-links-modal")?.classList.toggle("hidden");
    }
  };

  const disablePopup = (evt) => {
    evt.preventDefault();
    evt.target.closest(".modal")?.classList.toggle("hidden");
  };

  return (
    <div className={style.container}>
      <Image
        className={style.builderImages}
        onClick={openPopup}
        id="social-links"
        src={socialLinks}
        alt="Social Links"
      />
      <Image
        className={style.builderImages}
        data-modal-target="seo-modal"
        data-modal-toggle="seo-modal"
        onClick={openPopup}
        id="seo"
        src={seo}
        alt="SEO"
      />
      <Modal modalId={"seo-modal"}>
        <Form submitChanges={submitChanges} title={"Meta Settings for SEO"}>
          <button onClick={disablePopup} className="absolute right-1 top-1">
            <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 01-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 111.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 011.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 010 1.698z" />
            </svg>
          </button>
          <FormInput
            label={"Site Title"}
            type="text"
            value={siteTitle}
            onChange={onSiteTitleChange}
          ></FormInput>
          <FormInput
            label={"Site Description"}
            type="text"
            value={siteDescription}
            onChange={onSiteDescriptionChange}
          ></FormInput>
        </Form>
      </Modal>
    </div>
  );
}

/*
<label className="flex flex-col items-start justify-start w-full mb-4">
              <span className="text-sm font-bold text-gray-900">
                Site Description
              </span>
              <textarea
                className="w-full h-20 px-3 py-2 text-base text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                value={siteTitle}
                onChange={(evt) => onSiteTitleChange(evt.target.value)}
              />
            </label>

            <label className="flex flex-col items-start justify-start w-full mb-4">
              <span className="text-sm font-bold text-gray-900">
                Site Keywords
              </span>
              <textarea
                className="w-full h-20 px-3 py-2 text-base text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                value={siteTitle}
                onChange={(evt) => onSiteTitleChange(evt.target.value)}
              />
            </label>
*/
