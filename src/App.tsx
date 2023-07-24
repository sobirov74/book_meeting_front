import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "src/utils/helpers";
import { ToastContainer } from "react-toastify";
import Routes from "./components/Routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
