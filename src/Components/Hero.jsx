import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, BarChart3 } from 'lucide-react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import profilePic from '../assets/Portfolioimage.JPG';

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const dx = useSpring(mouseX, springConfig);
    const dy = useSpring(mouseY, springConfig);

    const background = useMotionTemplate`radial-gradient(600px circle at ${dx}px ${dy}px, rgba(139, 92, 246, 0.15), transparent 80%)`;

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section id="home" className="section relative overflow-hidden group" style={{ minHeight: '85vh', paddingTop: '20px', display: 'flex', alignItems: 'flex-start' }}>
            {/* Background Decor */}
            <div className="absolute inset-0 grid-pattern opacity-[0.2] -z-10 pointer-events-none" />

            {/* Shooting Stars Background */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="shooting-star"
                        style={{
                            top: `${Math.random() * 80}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5000}ms`
                        }}
                    />
                ))}
            </div>

            {/* Dynamic Mouse Glow */}
            <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10"
                style={{ background }}
            />

            <div className="hero-container relative z-10" style={{ width: '100%', flexDirection: 'column', gap: '4rem' }}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'flex-start', gap: '4rem', flexWrap: 'wrap' }}>
                    <motion.div
                        className="hero-content"
                        style={{ alignItems: 'center', textAlign: 'center', flex: '1' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-6" style={{ width: 'fit-content' }}>
                            <Sparkles className="w-3 h-3" />
                            <span>Available for New Opportunities</span>
                        </div>

                        <h1 className="hero-title" style={{ marginBottom: '0.5rem' }}>
                            Hi, I'm <span style={{ color: 'var(--accent)' }}>Gowtham C</span>
                        </h1>
                        <span className="hero-subtitle" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <BarChart3 size={20} style={{ color: 'var(--accent)' }} /> Data Analyst
                        </span>
                        <p className="hero-tagline">
                            "Unlocking hidden patterns in data to drive smarter business decisions."
                        </p>
                        <div className="hero-actions" style={{ justifyContent: 'center' }}>
                            <a href="#projects" className="btn btn-primary">
                                View My Work <ArrowRight size={18} />
                            </a>
                            <a href="#contact" className="btn btn-outline">
                                Get in Touch
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-image-wrapper"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ flex: '0 0 auto' }}
                    >
                        <div className="hero-image-container">
                            <img
                                src={profilePic}
                                alt="My Profile"
                                className="hero-profile-pic"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80' }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Centered About Me Section */}
                <motion.div
                    className="hero-about-card landscape"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ margin: '0 auto', maxWidth: '800px' }}
                >
                    <div className="about-landscape-content">
                        <h3 className="about-title">About Me</h3>
                        <p className="about-text">
                            I am an aspiring Data Analyst pursuing an MCA, passionate about discovering insights from data and presenting them through interactive dashboards and visualizations. My technical skills include Microsoft Excel, SQL, Power BI, Python, and Tableau. I enjoy cleaning, analyzing, and transforming raw data into meaningful reports that support informed business decisions. I am continuously learning new tools and techniques to strengthen my analytical and business intelligence skills.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
