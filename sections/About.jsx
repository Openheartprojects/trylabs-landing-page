'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Open Heart Projects" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Trylabs</span>Building world-class AI models requires access to diverse, high-quality training data. However, sourcing and curating this data can be a significant challenge,
         especially for specialized industry verticals. That's where Trylabs comes in.{' '}
        <span className="font-extrabold text-white">
        Trylabs data catalog is a growing library of specialized data sets, carefully curated and validated by our team of domain experts. 
        </span>{' '}
        today.{' '}
        <span className="font-extrabold text-white"></span> Innovate with Trylabs: Shaping Tomorrow, Today{' '}
        <span className="font-extrabold text-white">explore</span> Our Tools down below.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
