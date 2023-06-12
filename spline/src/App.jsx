import Spline from "@splinetool/react-spline";

function App() {
    return (
        <div style={{ position: "relative" }}>
            <Spline scene="https://prod.spline.design/prcYJYcz6rp5Up2E/scene.splinecode" />
            <button style={{ position: "absolute", bottom: 200, right: 900 }}>
                안녕
            </button>
        </div>
    );
}

export default App;
