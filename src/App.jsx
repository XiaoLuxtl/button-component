import "material-icons/iconfont/round.css";
import { Button } from "./ui/Button";

function App() {
  /* Button
    variant: ["default", "outline", "text"]
    colors: ["default", "primary", "secondary", "danger"]
    size: ["sm", "md", "lg"]
  */

  return (
    <main className="flex flex-col max-w-7xl m-auto">
      <h3 className="text-4xl pb-2">Buttons</h3>
      <div>
        <p className="pt-3 pb-2">{"<Button>Default</Button>"}</p>
        <Button>Default</Button>
      </div>
      {/* Default */}
      <div>
        <p className="pt-3 pb-2">
          {'<Button variant="outline" color="primary">Default</Button>'}
        </p>
        <Button variant="outline" color="primary">
          Default
        </Button>
      </div>
      {/* Text Variant */}
      <div>
        <p className="pt-3 pb-2">
          {'<Button variant="text" color="primary">Default</Button>'}
        </p>
        <Button variant="text" color="primary">
          Default
        </Button>
      </div>
      {/* Without Shadow */}
      <div>
        <p className="pt-3 pb-2">
          {'<Button color="primary" disableShadow>Default</Button>'}
        </p>
        <Button color="primary" disableShadow>
          Default
        </Button>
      </div>
      {/* Disabled */}
      <div className="flex">
        <div className="w-1/4">
          <p className="pt-3 pb-2">{"<Button disabled>Default</Button>"}</p>
          <Button disabled>Default</Button>
        </div>
        <div className="w-1/4">
          <p className="pt-3 pb-2">{"<Button disabled>Default</Button>"}</p>
          <Button variant="text" disabled>
            Default
          </Button>
        </div>
      </div>
      {/* Size */}
      <div className="flex">
        <div className="w-1/4">
          <p className="pt-3 pb-2">{'<Button size="sm">Default</Button>'}</p>
          <Button size="sm">Default</Button>
        </div>
        <div className="w-1/4">
          <p className="pt-3 pb-2">{'<Button size="md">Default</Button>'}</p>
          <Button size="md">Default</Button>
        </div>
        <div className="w-1/4">
          <p className="pt-3 pb-2">{'<Button size="lg">Default</Button>'}</p>
          <Button size="lg">Default</Button>
        </div>
      </div>
      {/* Color */}
      <div className="flex">
        <div className="w-1/4">
          <p className="pt-3 pb-2">
            {'<Button color="default">'}
            <br />
            Default
            <br />
            {"</Button>"}
          </p>
          <Button color="default">Default</Button>
        </div>
        <div className="w-1/4">
          <p className="pt-3 pb-2">
            {'<Button color="primary">'}
            <br />
            Default
            <br />
            {"</Button>"}
          </p>
          <Button color="primary">Default</Button>
        </div>
        <div className="w-1/4">
          <p className="pt-3 pb-2">
            {'<Button color="secondary">'}
            <br />
            Default
            <br />
            {"</Button>"}
          </p>
          <Button color="secondary">Default</Button>
        </div>
        <div className="w-1/4">
          <p className="pt-3 pb-2">
            {'<Button color="danger">'}
            <br />
            Default
            <br />
            {"</Button>"}
          </p>
          <Button color="danger">Default</Button>
        </div>
      </div>
    </main>
  );
}

export default App;
