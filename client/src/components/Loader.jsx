const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-16 h-16 animate-spin">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute w-3 h-3 bg-fuchsia-500 rounded-full"
            style={{
              top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
              left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
