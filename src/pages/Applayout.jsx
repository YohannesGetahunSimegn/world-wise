import SideBar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";
import User from "../components/User";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      {/* <AppNav /> */}
      <SideBar />
      <Map />
      <User />
    </div>
  );
}
