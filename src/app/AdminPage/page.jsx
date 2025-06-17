import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function AdminPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("auth") === "true";
    if (!isAuth) {
      router.replace("/login");
    } else {
      setAuthorized(true);
    }
  }, []);

  if (!authorized) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome, admin 👋</h1>
      <p>This is a protected page only you can see.</p>
      <button
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => {
          localStorage.removeItem("auth");
          router.push("/login");
        }}
      >
        Log out
      </button>
    </div>
  );
}
