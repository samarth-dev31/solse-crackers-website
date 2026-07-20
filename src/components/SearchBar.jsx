function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-4xl mx-auto px-4 my-8">
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-xl border-2 border-yellow-400 bg-black text-white text-lg outline-none focus:border-yellow-300"
      />
    </div>
  );
}

export default SearchBar;