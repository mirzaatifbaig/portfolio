import React from "react";
import { motion } from "framer-motion";

const Project = ({ name, description, imageUrl, svgs, url }) => {
  return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgb(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95, filter: "brightness(0.9)" }}
            className="bg-zinc-800 rounded-lg overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          <img src={imageUrl} alt={name} className="w-full h-48 object-cover" loading="lazy" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
            <p className="text-zinc-400 mb-4">{description}</p>
            <div className="flex space-x-4">
              {svgs.map((Icon, index) => (
                  <Icon key={index} className="w-6 h-6 text-zinc-300" />
              ))}
            </div>
          </div>
        </motion.div>
      </a>
  );
};

export default Project;
