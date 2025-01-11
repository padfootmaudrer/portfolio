import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    // <div className="flex min-h-screen flex-col items-center p-24 bg-white-to-yellow">
    <div className="flex min-h-screen flex-col items-center p-24 bg-white">
      <h1 className="font-bold pb-12 font-serif text-blue-900 text-6xl">Sushobhith Sharma</h1>
      <div className="text-center p-4 max-w-lg">
        <p className="text-lg leading-relaxed">
          I&apos;m a software engineer. 
          <br />
          Most recently I was working as Senior Software Engineer at Juspay, a global payments startup based out of India. 
          I&apos;ve spent several years helping scale Juspay from a small startup to a Billion dollar company. 
          <br /><br />
          I focus my time these days on helping other startups and building one of my own! 
          <br /><br />
          Besides that I am currently traveling across Europe and US. 
          During this trip I have learned surfing, discovered an unknown waterfall at 3800ft and became a certified yoga teacher.
        </p>
      </div>
      {/* <div className="flex flex col items-center justify-center">
      </div> */}
      <div className="flex items-center justify-center space-x-6 pt-24">
        {/* Twitter */}
        <a
          href="https://twitter.com/sushobhith"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:scale-110 transition-transform"
        >
          <FaTwitter size={28} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sushobhith"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:scale-110 transition-transform"
        >
          <FaLinkedinIn size={28} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/sushobhith"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:scale-110 transition-transform"
        >
          <FaGithub size={28} />
        </a>
      </div>
    </div>
  );
}
