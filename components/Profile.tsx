import { signOut, useSession } from "next-auth/react";
import React from "react";
import { Flathead } from "../fonts";

const Profile = () => {
  const { data: session } = useSession();
  return (
    <div className="grid grid-cols-1 text-center">
      <p className={`${Flathead.className} my-3 text-2xl`}>
        Bienvenido, {session?.user?.name}
      </p>
      <img
        src={session?.user?.image!}
        alt="avatar"
        referrerPolicy="no-referrer"
        className="mx-auto rounded-md h-auto w-auto"
      />
      <button
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
        className={`${Flathead.className} my-5 bg-gray-700 text-white w-[10em] mx-auto rounded-lg p-2`}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
