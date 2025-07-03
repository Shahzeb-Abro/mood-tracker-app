export const Steps = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="my-8 md:my-12 flex items-center gap-4 px-5 md:px-8">
      <div
        className={`flex-1 h-1.5 rounded-full ${
          currentStep >= 1 ? "bg-blue-700" : "bg-blue-200"
        }`}
        onClick={() => setCurrentStep(1)}
      ></div>
      <div
        className={`flex-1 h-1.5 rounded-full ${
          currentStep >= 2 ? "bg-blue-700" : "bg-blue-200"
        }`}
        onClick={() => setCurrentStep(2)}
      ></div>
      <div
        className={`flex-1 h-1.5 rounded-full ${
          currentStep >= 3 ? "bg-blue-700" : "bg-blue-200"
        }`}
        onClick={() => setCurrentStep(3)}
      ></div>
      <div
        className={`flex-1 h-1.5 rounded-full ${
          currentStep >= 4 ? "bg-blue-700" : "bg-blue-200"
        }`}
        onClick={() => setCurrentStep(4)}
      ></div>
    </div>
  );
};
