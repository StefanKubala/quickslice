/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm semi-bold duration-300 hover:bg-yellow-300 rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5  py-2 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block px-4 py-2.5 hover:bg-stone-300 hover:text-stone-800 md:px-6 md:py-3.5 semi-bold duration-300 border-stone-300 rounded-full border-2 font-semibold uppercase tracking-wide text-stone-400 transition-colors focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed ",
  };

  if (onClick)
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
