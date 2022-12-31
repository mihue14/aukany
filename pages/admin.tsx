import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Flathead } from "../fonts";
import NavbarAdmin from "../components/NavbarAdmin";
import Bookings from "../components/Bookings";
import Profile from "../components/Profile";
import Swal from "sweetalert2";
import Filters from "../components/Filters";

const Admin = () => {
  const { data: session } = useSession();

  if (session?.user && session.user.email === process.env.NEXT_PUBLIC_ADMIN) {
    return (
      <div>
        <NavbarAdmin />
        <Profile />
        <Filters />
        <Bookings />
      </div>
    );
  } else if (
    session?.user &&
    session.user.email !== process.env.NEXT_PUBLIC_ADMIN
  ) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "No eres administrador",
      showConfirmButton: false,
      timer: 2500,
    });
    setTimeout(() => {
      signOut({ callbackUrl: "/" });
    }, 2500);
  } else {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-tl from-black via-neutral-900 to-slate-500">
        <button
          className={`${Flathead.className} text-4xl text-black bg-white p-2 rounded-lg transition-all duration-500 hover:scale-110`}
          onClick={() => signIn()}
        >
          INICIAR SESIÓN
        </button>
      </div>
    );
  }
};

export default Admin;
