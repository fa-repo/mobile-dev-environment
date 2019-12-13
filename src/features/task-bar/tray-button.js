import TrayIcon from "../icons/tray";
import classnames from "classnames";
import crel from "crel";

export default function TrayButton({ isActive = false, onClick } = {}) {
  const className = classnames(isActive && "active");

  const Button = crel("button", { id: "mde-toggle-log-tray", class: className }, TrayIcon());

  if (onClick) Button.addEventListener("click", onClick);

  return Button;
}