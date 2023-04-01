import style from "./tab.module.scss";

export default function Tab({ children, activeTab, id }) {
  return (
    <div className={style.container}>
      <div className={activeTab == id ? style.active : style.hidden}>
        {children}
      </div>
    </div>
  );
}
