function CardDesign() {
  return (
    <div className="flex flex-col shadow-black shadow-[8px_8px_2px_0_rgba(0,0,0,0.9)] mt-32  gap-6 justify-center  p-4 rounded-2xl w-80 mx-auto bg-white max-w-2xl">
      <img
        className="rounded-2xl w-full mx-auto"
        src="/illustration-article.svg"
        alt="card illustration"
      />

      <div className="flex flex-col gap-4">
        <div>
          <p className=" bg-[#f5d13f] inline-block p-2 rounded-md font-semibold">
            Learning
          </p>
        </div>
        <p>Published 21 Dec 2023</p>

        <h3 className="font-bold text-xl">HTML & CSS foundations</h3>
        <p className=" text-black/60">
          These languages are backbone of every website, defining sructure,
          content, and preservation
        </p>
      </div>
      <div className="flex items-center justify-start gap-4">
        <img
          className="w-12"
          src="/image-avatar.webp"
          alt="image of an avatar portrait"
        />
        <p className="text-sm font-semibold">Greg Hooper</p>
      </div>
    </div>
  );
}

export default CardDesign;
