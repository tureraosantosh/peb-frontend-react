import React from "react";
import styles from "./header.module.css";

interface HeaderProps {
  userName?: string;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ userName, onLogout }) => {
  return (
    <header className={styles.header}>
      {/* Left Section - Logo */}
      <div className={styles.left}>
        <img
          src="/assets/hospital-logo.png"
          alt="Hospital Logo"
          className={styles.logo}
        />
        <h2 className={styles.title}>CarePlus Hospital</h2>
      </div>

      {/* Center Section - Navigation */}
      <nav className={styles.nav}>
        <a href="/dashboard">Dashboard</a>
        <a href="/patients">Patients</a>
        <a href="/appointments">Appointments</a>
        <a href="/billing">Billing</a>
      </nav>

      {/* Right Section - User */}
      <div className={styles.right}>
        <span className={styles.notification}>🔔</span>

        <div className={styles.user}>
          <span>{userName || "Doctor"}</span>
        </div>

        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
