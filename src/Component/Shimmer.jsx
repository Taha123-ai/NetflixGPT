const Shimmer = () => {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-8 border-gray-700 border-t-red-600"></div>
      <p className="text-sm text-gray-400">Finding movies...</p>
    </div>
  );
};

export default Shimmer;
