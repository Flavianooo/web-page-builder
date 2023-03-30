import style from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={style.container}>
      <main>{children}</main>
    </div>
  );
}
