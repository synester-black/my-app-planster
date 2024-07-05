import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-center items-center bg-emerald-600 px-8 py-3 ">
            <Link className="text-white font-bold px-10" href={"/"}>Planster</Link>
            <Link  className="text-black font-bold px-10"href={"./addEvent"}>Add Event</Link>
        </nav>
    );
  }
  