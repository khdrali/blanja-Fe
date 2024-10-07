import { useRouter } from "next/router";
import { useEffect } from "react";
import SplashScreen from "../shared/components/spalsh-screen";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 1500);
  });

  return <SplashScreen />;
}
