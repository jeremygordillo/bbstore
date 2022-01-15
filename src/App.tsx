import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import CategoryPage from "./pages/Category";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="w-full fixed flex h-14 px-6 items-center bg-sky-500 shadow-lg z-10">
        <a href="/" className="font-bold text-2xl text-white flex-grow">
          BB Store
        </a>
      </div>
      <div className="h-14" />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="category/:category">
            <Route index element={<CategoryPage />} />
            <Route path="product/:id" element={<ProductPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
