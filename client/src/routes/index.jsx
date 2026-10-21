import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Quiz from '../components/Quiz';

export default () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/quiz/:quizName" element={<Quiz />} />
  </Routes>
);
