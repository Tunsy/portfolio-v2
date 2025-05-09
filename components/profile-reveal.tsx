import { motion } from "framer-motion";

export default function ProfileReveal() {
  return (
    <motion.div
    className="relative overflow-hidden rounded-2xl w-[600px] h-[600px]"
    initial={{ 
        clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)", 
        opacity: 0 
    }}
    whileInView={{ 
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
        opacity: 1 
    }}
    transition={{ 
        duration: 0.8, 
        ease: "easeInOut", 
        delay: 0.3 
    }}
    viewport={{ once: true, amount: 0.5 }}
    >
        <img
            src="/images/profile.jpg"
            alt="Profile"
            className="h-full w-full object-cover"
        />
    </motion.div>
  );
}