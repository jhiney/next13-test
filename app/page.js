import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";

const jetBrains_Mono = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
	return <h1 className={jetBrains_Mono.className}>Hello, Next.js!</h1>;
}
