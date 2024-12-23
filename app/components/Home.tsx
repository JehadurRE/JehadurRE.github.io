import EncryptButtons from "./Buttons/EncryptButtons";
import OnScrollReveal from "../animations/on_scroll_reveal";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Jost } from 'next/font/google';
import { caveat } from "../fonts";

const jost = Jost({
  weight: ['400', '500', '600'],  // You can specify the weights you need
  subsets: ['latin'],  // Specify subsets (optional)
  display: 'swap',  // Font-display property
});

export default function Home() {
  return (
    <section className="w-screen h-screen flex flex-col items-start justify-start md:justify-center  m-10">
      <OnScrollReveal>
        <h1 className={` ${jost.className}  text-3xl sm:text-4xl md:text-6xl lg:7xl font-bold text-[#29a587] `}>
          
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <b>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</b>,نفسي
          </span>
          <br />
          Jehadur Rahman (Emran)
        </h1>
      </OnScrollReveal>

      
      <OnScrollReveal>
      <h1 className={`${caveat.className} text-2xl font-light`}>I am a full stack developer</h1>
      </OnScrollReveal>
      <OnScrollReveal>
        {/* Social Logos with Hyperlink */}
        <div className="flex flex-row items-center justify-start">
          {/* add social icons */}
          <a className="m-2 "
            href="https://www.facebook.com/jehadur.rahaman"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook  size={32}/>
          </a>
          <a
            href="https://www.linkedin.com/in/JehadurRE"
            target="_blank"
            rel="noreferrer"
          >
            <CiLinkedin size={32} />
          </a>
          {/* add twitter and github */}
          <a
            href="https://twitter.com/JehadurRE"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter size={32}/>
          </a>
          {/* add github */}
          <a
            href="https://x.com/JehadurRE"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </OnScrollReveal>

      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Download CV 
          </button> */}
      
      <div className="mt-4">
      <EncryptButtons />
      </div>
    </section>
  );
}
