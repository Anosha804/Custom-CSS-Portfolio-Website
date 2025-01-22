"use client";

import Hero from "../components/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";

import React from 'react'

const Homepage = () => {
  return (
    <div>
        <Hero/>
        <Project/>
        <Skills/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Homepage