import { choose } from '../functions/choose'

const Choose = () => {
  return (
    <div className=" flex flex-col space-y-6 p-10  md:mx-5 choose text-white gap-7">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center text-[30px]">Why Choose Us</h2>
        <p className="text-center text-zinc-300 max-w-lg text-[16px]">
          Choosing us as your plumber means you will be getting a reliable and
          experienced professional who has the expertise to deliver quality
          services
        </p>
      </div>
      <div className="sm:mx-5 md:mx-20 lg:mx-40 flex flex-col space-y-3">
        {choose.map((c, index) => (
          <div className="flex space-x-2 items-center" key={index}>
           {c.icon}
          <span>
              <p className="font-bold text-[18px]">{c.name}</p>
            <p style={{ fontSize: "14px" }} className="text-zinc-300">
              {c.summary}
            </p>
          </span>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
