import Image from "next/image";


const FrontPageCards: React.FC = () => {
  return (
    <>
      <div className="m-auto mt-12">
        <div className="w-full h-[90vh] flex bg-foreground rounded-[1rem]">
          <Image
            src="/eivydasPic.png"
            className="h-full"
            width={500}
            height={250}
            alt="Eivydas Picture"
          ></Image>

          <div className="w-full flex mt-12 items-center flex-col">
            <div className="items-start text-white w-[90%] ml-28 font-bold">
              <h1 className="text-5xl">Eivydas (Summary)</h1>
              <p className="text-2xl mt-12">
                I do not personally speak with him, but he is always with his
                phone out in classes
              </p>
              <p className="mt-12 text-2xl">
                You want to read more? Check out his{" "}
                <a href="/wiki/eivydas">wiki!</a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-[90vh] flex bg-foreground rounded-[1rem] mt-12">
          <div className="w-full flex mt-12 items-center flex-col">
            <div className="items-start text-white w-[90%] ml-28 font-bold">
              <h1 className="text-5xl">Danielius (Summary)</h1>
              <p className="text-2xl mt-12">
                As always, I do not speak with him personally, but as always he
                has his phone out. And he has a boyfriend <a>Vakaris</a>
              </p>
              <p className="mt-12 text-2xl">
                You want to read more? Check out his{" "}
                <a href="/wiki/danielius">wiki!</a>
              </p>
            </div>
          </div>
          <Image
            src="/danielius.png"
            className="h-full "
            width={500}
            height={250}
            alt="Danielius Picture"
          ></Image>
        </div>

        <div className="w-full h-[90vh] flex mt-12 bg-foreground rounded-[1rem]">
          <Image
            src="/vakaris.png"
            className="h-full"
            width={500}
            height={250}
            alt="Vakaris Picture"
          ></Image>

          <div className="w-full flex items-center flex-col">
            <div className="items-start text-white w-[90%] ml-28 font-bold">
              <h1 className="text-5xl">Eivydas (Summary)</h1>
              <p className="text-2xl mt-12">
                I do not personally speak with him, but he is always with his
                phone out in classes
              </p>
              <p className="mt-12 text-2xl">
                You want to read more? Check out his{" "}
                <a href="/wiki/vakaris">wiki!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPageCards;
