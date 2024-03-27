export default function Home() {
  return (
    <main>
      <h1>Find events around you</h1>
      <p>Browse more than 10,000 events around you</p>

      <form>
        <input
          type="text"
          placeholder="Enter your location"
          spellCheck={false}
        />
        <button>Search</button>
      </form>
    </main>
  );
}
