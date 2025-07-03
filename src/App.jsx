import { useState } from "react";
import { Button, Checkbox, Input, Modal, RadioButton } from "./components";

function App() {
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <h1 className="text-preset-9 text-emerald-500">Hello World</h1>
      <Button label="Sign Up" onClick={() => setShowModal(true)} />
      <Button label="Upload" variant="secondary" />
      <Input placeholder={"name@gmail.com"} className="max-w-sm" />
      <Checkbox checked={checked} setChecked={setChecked} />
      <RadioButton checked={checked} setChecked={setChecked} />
      <Modal
        dialogTrigger={<button>Show Dialog</button>}
        title="Log Your Mood"
        subTitle="Log your mode below using below given steps"
        footer={<Button label="Continue" className="w-full" />}
      >
        <p>Hello World</p>
      </Modal>
    </div>
  );
}

export default App;
