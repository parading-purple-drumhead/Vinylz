import crowd from "../assets/crowd.png";
import sell from "../assets/Sell.png";

const ServiceModels = () => {
  return (
    <div className="service-models">
      <div className="-mt-10">
        <hr className="border-b-2 border-black" />
        <p className="my-20 text-center text-lg font-semibold">
          No matter where you're at in your career, we've got a production model
          to suit you.
        </p>
        <hr className="border-b-2 border-black" />
      </div>
      <div className="models flex text-center">
        <div className="model flex w-1/2 flex-col items-center justify-between gap-5 bg-[#FFF804] py-10">
          <p className="box-text">No risk, no waste</p>
          <h1 className="text-4xl font-semibold">Crowdfunding</h1>
          <p className="grow px-40 text-lg font-semibold">
            Rally your fans and gather pledges. Press the exact number of
            records you need, without having to pay anything upfront.
          </p>
          <img src={crowd} className="size-80" alt="" />
          <button className="rounded-full bg-black px-10 py-3 font-bold uppercase text-white">
            Learn More
          </button>
        </div>
        <div className="model flex w-1/2 flex-col items-center justify-between gap-5 bg-[#81836C] py-10">
          <p className="box-text">Get into it</p>
          <h1 className="text-4xl font-semibold">Press & Sell</h1>
          <p className="grow px-40 text-lg font-semibold">
            Launch your record, sooner. Take pre-orders from fans and we'll take
            care of the rest.
          </p>
          <img src={sell} className="h-auto w-96" alt="" />
          <button className="rounded-full bg-black px-10 py-3 font-bold uppercase text-white">
            Learn More
          </button>
        </div>
      </div>
      <div className="alt-model flex justify-center gap-5 bg-black px-40 py-20 text-xl text-white">
        <span>
          Just after straight up pressing? We do that too. Records are shipped
          in bulk to wherever you need.
        </span>
        <span className="cursor-pointer uppercase underline">
          Start a press only project
        </span>
      </div>
    </div>
  );
};

export default ServiceModels;
