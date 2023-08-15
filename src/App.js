import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="submit-request" element={<SubmitRequest />} />
          {/* SERVICES */}
          <Route path="services/lawn" element={<Lawn />} />
          <Route path="services/xeriscape" element={<Xeriscape />} />
          <Route path="services/bee-garden" element={<BeeGarden />} />
          <Route
            path="services/vegetable-garden"
            element={<VegetableGarden />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <App />
    </ThemeProvider>
  );
};
