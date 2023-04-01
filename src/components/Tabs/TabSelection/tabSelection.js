import style from "./tabSelection.module.scss";

export default function TabSelection({ tabs, activeTab, setActiveTab }) {
  const changeActiveTab = (e) => {
    setActiveTab(e.target.id);
  };

  return (
    <div className={style.container}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          id={tab[0]}
          className={activeTab == tab[0] ? style.activeTab : style.tab}
          onClick={changeActiveTab}
        >
          {tab[1]}
        </button>
      ))}
    </div>
  );
}
