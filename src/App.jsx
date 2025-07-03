import { Button, Input } from "./components";

function App() {
  return (
    <div>
      <h1 className="text-preset-9 text-emerald-500">Hello World</h1>
      <Button label="Sign Up" />
      <Button label="Upload" variant="secondary" />
      <Input placeholder={"name@gmail.com"} className="max-w-sm" />
    </div>
  );
}

export default App;
