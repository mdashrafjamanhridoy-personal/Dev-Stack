import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

const TechnologyCards = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load JSON data
  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load technologies!");
        setLoading(false);
      });
  }, []);

  // Add to stack
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one
  const handleRemove = (id: string) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack(stack.filter((item) => item.id !== id));

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack!`);
    }
  };

  // Remove all
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.error("All technologies removed from your stack!");
  };

  if (loading) {
    return (
      <div className="py-10 text-center">
        <p>Loading technologies...</p>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />

      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-slate-900">
          Explore the{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="mt-1 text-xs text-slate-400">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Cards + Your Stack */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

        {/* Technology Cards */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {technologies.map((technology) => {
              const isAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <div
                  key={technology.id}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Icon + Badge */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-100 p-2">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                      {technology.badge}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    {technology.name}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 min-h-[48px] text-sm leading-6 text-slate-500">
                    {technology.description}
                  </p>

                  {/* Category + Difficulty + Rating */}
                  <div className="mb-5 flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium">
                      {technology.category}
                    </span>

                    <span className="text-xs text-slate-500">
                      {technology.difficulty}
                    </span>

                    <span className="text-sm font-medium">
                      ⭐ {technology.rating}
                    </span>
                  </div>

                  {/* Add Button */}
                  <button
                    onClick={() => handleAddToStack(technology)}
                    disabled={isAdded}
                    className={`w-full rounded-lg py-2.5 text-sm font-medium transition ${
                      isAdded
                        ? "cursor-not-allowed bg-slate-200 text-slate-500"
                        : "bg-slate-950 text-white hover:bg-slate-800"
                    }`}
                  >
                    {isAdded
                      ? "✓ Added to Stack"
                      : "Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Your Stack Sidebar */}
        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

          {/* Stack Heading */}
          <div className="mb-4">
            <h2 className="text-sm font-bold text-slate-900">
              Your Stack
            </h2>

            <p className="mt-1 text-[10px] text-slate-400">
              {stack.length} Technology Selected
            </p>
          </div>

          {/* Empty State */}
          {stack.length === 0 ? (
            <div className="rounded-lg bg-slate-50 px-4 py-10 text-center">
              <p className="text-xs font-medium text-slate-500">
                Your stack is empty
              </p>

              <p className="mt-1 text-[10px] text-slate-400">
                Add technologies to build your stack
              </p>
            </div>
          ) : (
            <>
              {/* Stack Items */}
              <div className="space-y-2">
                {stack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 rounded-md border border-slate-200 px-2.5 py-2"
                  >
                    {/* Icon */}
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-7 w-7 object-contain"
                    />

                    {/* Name + Category */}
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-[10px] font-medium text-slate-800">
                        {item.name}
                      </h3>

                      <p className="text-[8px] text-slate-400">
                        {item.category}
                      </p>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-base font-normal text-slate-400 transition hover:text-red-500"
                      title="Remove"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {/* Remove All */}
              <button
                onClick={handleRemoveAll}
                className="mt-7 w-full rounded-md border border-red-300 bg-white py-2 text-xs font-medium text-red-500 transition hover:bg-red-50"
              >
                Remove All
              </button>
            </>
          )}
        </aside>
      </div>
    </section>
  );
};

export default TechnologyCards;