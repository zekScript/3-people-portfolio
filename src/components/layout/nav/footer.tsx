import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="w-[40%] h-full m-auto mt-12 flex">
        <Image src="/logo.png" height={250} width={100} alt="Logo"></Image>
        <div className=" w-full h-full flex justify-center m-auto flex-col text-gray-600 text-sm font-normal">
          <p>
            &copy; 2023 Classmates portfolio. All rights reserved.
            Designed by <span className="text-sky-300">Armandas</span> &amp;{" "}
            <span className="text-sky-300">Requested by Teacher</span>
          </p>
          <div className="flex gap-2">
            <Link
              className="text-slate-300"
              href="/footerpages/aboutPrivacy/privacy"
            >
              Privacy
            </Link>

            <p className="text-slate-300">|</p>
            <Link
              className="text-slate-300"
              href="/footerpages/aboutCookies/cookies"
            >
              Cookies <span>(Not available)</span>
            </Link>

            <p className="text-slate-300">|</p>
            <Link
              className="text-slate-300"
              href="/footerpages/aboutTerms&Conditions/tac"
            >
              Terms and conditions
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
