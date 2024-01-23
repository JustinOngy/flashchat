import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/lightning.png"
        />
      </div>
      <h2
        className="flex justify-center mt-4 text-xl"
        style={{
          fontFamily: "Roboto Condensed",
          fontWeight: 700,
          fontStyle: "italic",
        }}>
        Sign In Fast
      </h2>
      <AuthForm />
    </div>
  );
}
