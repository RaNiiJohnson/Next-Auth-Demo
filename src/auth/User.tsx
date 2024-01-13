import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { LogoutButton } from "./LogoutButton";
import { getRequiredAuthSession } from "../lib/auth";

export const User = async () => {
  const session = await getRequiredAuthSession();

  return (
    <div className="card w-96 text-primary-content">
      <div className="card-body">
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={session.user?.image ?? ""} />
          </div>
        </div>
        <h2 className="card-title">{session.user?.name}</h2>
        <p>{session.user?.email}</p>
        <p>{session.user?.id}</p>
        <div className="card-actions justify-end">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};
