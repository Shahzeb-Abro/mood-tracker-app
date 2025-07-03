import { useState } from "react";
import { Button, Checkbox, Input, RadioButton } from "./components";
import { LogMoodModal } from "./modals";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h1 className="text-preset-9 text-emerald-500">Hello World</h1>
      <Button label="Sign Up" />
      <Button label="Upload" variant="secondary" />
      <Input placeholder={"name@gmail.com"} className="max-w-sm" />
      <Checkbox checked={checked} setChecked={setChecked} />
      <RadioButton checked={checked} setChecked={setChecked} />

      <LogMoodModal />
    </div>
  );
}

export default App;
