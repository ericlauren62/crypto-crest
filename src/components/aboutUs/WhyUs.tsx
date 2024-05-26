type Props = {};

export const WhyUs = (props: Props) => {
  return (
    <section className="bg-aboutImg text-white h-screen bg-no-repeat bg-cover flex  items-center justify-center mt-16 px-6 xl:px-0">
      <div className="flex flex-col gap-10 py-24 text-center">
        <h1 className="text-5xl font-semibold leading-16 capitalize">
          Why choose CryptoCrest?
        </h1>
        <p className="text-2xl font-medium leading-10 lg:w-5/6 mx-auto ">
          We give our client's trading journey highest priority, so we’re always
          evolving our technology, services and education. We’ve established
          ourselves as a leading, trusted, regulated broker offering the best
          possible experience.
        </p>
      </div>
    </section>
  );
};
