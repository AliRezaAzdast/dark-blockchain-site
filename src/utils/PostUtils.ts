export const getColorFromCatagory = (catagory: string) => {
  switch (catagory) {
    case "Sustainability":
      return "lime";
    case "Innovation":
      return "cyan";
    case "Security":
      return "violet";
    default:
      return "fuchsia";
  }
};
