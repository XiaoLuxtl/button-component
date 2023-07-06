import "./App.css";
import { Button } from "./ui/Button";

function App() {
  return (
    <main className="flex justify-center content-center">
      {/* 
       variant: ["default", "outline", "text"]
       colors: ["default", "primary", "secondary", "danger"]
       size: ["sm", "md", "lg"]
      */}
      <Button size="lg">I&#39;m a button</Button>
    </main>
  );
}

export default App;
