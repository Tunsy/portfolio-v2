import { motion } from "framer-motion";

export default function ProfileReveal() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl"
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
        src="/images/profile.jpg"
        alt="Profile"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
}