import { useMultiStepForm } from "./useMultiStepForm";

const App = () => {
  const { currentStepIndex, step, steps, next, back, isFirstStep, isLastStep } =
    useMultiStepForm([<div>One</div>, <div>Two</div>]);
  return (
    <div className="main">
      <form>
        <div className="index">
          {currentStepIndex + 1}/{steps.length}
        </div>

        {step}

        <div className="btn-wrapper">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              back
            </button>
          )}

          <button type="button" onClick={next}>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default App;
