import { motion } from "framer-motion";
export function Overview() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="inline-block mb-8 text-kp-gold/30 text-4xl"
        >
          ♠
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="font-display text-2xl md:text-4xl text-kp-champagne leading-relaxed md:leading-loose font-light"
        >
          Kadi is a fast-paced Kenyan card game for{" "}
          <span className="text-kp-gold font-medium">2 to 5 players</span>,
          played with a standard 54-card deck. To claim the win, your hand must end on a high note.
          You may only exit the game by playing an {" "} 
          <span className="text-kp-gold font-medium">
            Answer Card
          </span>{" "} or a {" "}
          <span className="text-kp-gold font-medium">
            Question-Answer sequence.
          </span>{" "}
          Ending on a Jump, Kickback, or Penalty card is an invalid move
        </motion.p>
      </div>
    </section>
  );
}
