"use client";

const SearchForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition hover:ring-2 focus:ring-2 focus:bg-white/10"
        placeholder="Enter your location"
        spellCheck={false}
      />
    </form>
  );
};

export default SearchForm;
