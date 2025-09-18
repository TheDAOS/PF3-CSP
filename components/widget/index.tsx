const Widget = ({
  size = "small",
}: {
  size?: "small" | "medium" | "large";
}) => {
  const sizeClass = {
    small: "w-48 h-48",
    medium: "w-96 h-48",
    large: "w-96 h-96",
  };

  return (
    <div
      className={`bg-gray-200 border border-gray-400 rounded-lg shadow-md p-4 ${
        sizeClass[size as keyof typeof sizeClass]
      }`}
    ></div>
  );
};

export default Widget;
