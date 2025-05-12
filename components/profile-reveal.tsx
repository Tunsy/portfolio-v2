import { motion } from "framer-motion";

export default function ProfileReveal() {
  return (
    <motion.div
      className="
        relative 
        w-full 
        max-w-xs     /* mobile: up to ~16rem */
        sm:max-w-sm  /* ≥640px: up to ~24rem */
        md:max-w-md  /* ≥768px: up to ~28rem */
        lg:max-w-lg  /* ≥1024px: up to ~32rem */
        aspect-square 
        overflow-hidden 
        rounded-2xl
        opacity-0"
      style={{ width: 400, height: 400 }}             // match your image size
      initial={{ clipPath: "inset(25% 0% 25% 0%)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.3,
        times: [0, 1],
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <img
        src="/images/profile2.jpg"
        alt="Profile"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
}