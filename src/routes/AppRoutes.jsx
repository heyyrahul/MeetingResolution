import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = () => <div>Home Page</div>;
const CircularResolution = () => <div>Circular Resolution Page</div>;
const TemplateGroup = () => <div>Template Group Page</div>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/circular-resolution" element={<CircularResolution />} />
      <Route path="/template-group" element={<TemplateGroup />} />
    </Routes>
  );
};

export default AppRoutes;
