function QrCodeDesign() {
  return (
    <div className="bg-white p-4 items-center justify-center w-80 max-w-xl mx-auto rounded-2xl flex flex-col mt-44">
      <img
        className="w-full rounded-2xl"
        src="/image-qr-code.png"
        alt="Qr Code image"
      />
      <div className="w-full text-center gap-4 flex flex-col items-center justify-center p-4">
        <h2 className="text-center font-bold text-xl">
          Improve your front-end <br /> skills by building projects
        </h2>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default QrCodeDesign;
