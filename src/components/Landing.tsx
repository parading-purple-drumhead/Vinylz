import landing_1 from "../assets/landing-1.jpg";
import landing_2 from "../assets/landing-2.jpg";

const Landing = () => {
  return (
    <div className="landing px-20 pt-20">
      <div className="flex items-center gap-10">
        <div className="text w-1/3">
          <p className="box-text mb-10">Why Vinylz</p>
          <h1 className="text-6xl font-semibold">Your music on vinyl.</h1>
          <h1 className="text-6xl font-semibold">Without the barriers.</h1>
          <p className="mt-10 text-xl font-semibold">
            Full-service pressing, a global retail network, customer support -
            and you keep up to 85% of profits.
          </p>
        </div>
        <div className="image w-2/3">
          <img
            src={landing_1}
            className="h-auto w-full origin-left rotate-6 border-[3px] border-black"
            alt="Vinyl Record"
          />
        </div>
      </div>
      <div className="flex items-center gap-20">
        <div className="image w-1/2">
          <img
            src={landing_2}
            className="h-auto w-full origin-left -rotate-6 border-[3px] border-black"
            alt="Vinyl Record"
          />
        </div>
        <div className="text w-1/3">
          <p className="box-text mb-10">Why Vinylz</p>
          <h1 className="text-6xl font-semibold">
            Over $1 Million Paid To Artists
          </h1>
          <p className="mt-10 text-xl font-semibold">
            We've helped thousands of artists press their music on vinyl and
            sell it worldwide. We've paid out over $1 million in profits to
            artists just like you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
