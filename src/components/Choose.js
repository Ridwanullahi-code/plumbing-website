const Choose = () => {
  return (
    <div className=" flex flex-col space-y-6 p-10  md:mx-5 choose text-white">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center">Why Choose Us</h2>
        <p className="text-center text-zinc-300 max-w-lg" style={{ fontSize: "13px" }}>
          Choosing us as your plumber means you will be getting a reliable and
          experienced professional who has the expertise to deliver quality
          services. We are also dedicated to providing excellent customer service
          and developing solutions that meet your needs.
        </p>
      </div>
      <div className="sm:mx-5 md:mx-20 lg:mx-40">
        <h3 className="font-bold mb-2">
          Anything you might need from our plumbing specialist
        </h3>
        <p className="max-w-md text-zinc-300" style={{ fontSize: "13px" }}>
          Attention to Details It is our attention to the small stuff,
          scheduling of timelines and keen project management that makes us
          stand out from the rest.
        </p>
      </div>
      <div className="sm:mx-5 md:mx-20 lg:mx-40 flex flex-col space-y-3">
        <div className="flex space-x-2 items-center">
          <i className="fa-solid fa-bath" style={{ fontSize: "32px" }} />
          <span>
            <p className="">Residential Plumbing Services</p>
            <p style={{ fontSize: "14px" }} className="text-zinc-300">
              Anything you might need from our plumbing specialist
            </p>
          </span>
        </div>
        <div className="flex space-x-2 items-center">
          <i className="fa-solid fa-faucet-drip"> style={{ fontSize: "32px" }} />
          <span>
            <p className="">Residential Plumbing Services</p>
            <p style={{ fontSize: "14px" }} className="text-zinc-300">
              Anything you might need from our plumbing specialist
            </p>
          </span>
        </div>
        <div className="flex space-x-2 items-center">
          <i className="fa-solid fa-house" style={{ fontSize: "32px" }} />
          <span>
            <p className="">Residential Plumbing Services</p>
            <p style={{ fontSize: "14px" }} className="text-zinc-300">
              Anything you might need from our plumbing specialist
            </p>
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Choose;
