import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import kissPic from "/kiss.jpg";
import dogPic from "/dog.jpg";

function WeddingInvitation() {
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9f7f3] text-gray-800 font-serif">
      <motion.div
        className="text-center py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold tracking-wide text-[#3b3a30]">Maarten & Charlotte</h1>
        <p className="mt-4 text-xl">gaan trouwen!</p>
        <p className="mt-2 text-lg italic">1 augustus 2026 in Tielen & Den Eyck</p>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-lg mb-8">
          We zouden het geweldig vinden als jullie samen met ons deze bijzondere dag willen vieren. Kom genieten van liefde, eten, drankjes, dansjes en heel veel gezelligheid!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Image src={kissPic} alt="Maarten en Charlotte" className="rounded-2xl shadow" />
          <Image src={dogPic} alt="Maarten, Charlotte en hun hond" className="rounded-2xl shadow" />
        </div>

        <p className="text-lg mb-6">
          💍 We trouwen voor de wet om <strong>13u in het gemeentehuis van Tielen</strong>. Iedereen is van harte welkom om dit moment met ons mee te beleven.
        </p>
        <p className="text-lg mb-8">
          🎉 Nadien verwelkomen we jullie voor een ceremonie en ons trouwfeest in <a href="https://www.deneyck.be/" target="_blank" className="underline text-[#3b3a30]">Den Eyck</a>.
        </p>

        <motion.button
          className="bg-[#3b3a30] text-white px-6 py-2 rounded-2xl shadow hover:shadow-lg transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowFAQ(!showFAQ)}
        >
          {showFAQ ? "Verberg FAQ" : "Bekijk FAQ"}
        </motion.button>
      </motion.div>

      {showFAQ && (
        <motion.div
          className="max-w-3xl mx-auto mt-12 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl mb-6 font-semibold text-[#3b3a30]">FAQ</h2>
          <div className="mb-4">
            <h3 className="font-bold">Wat moeten we aandoen?</h3>
            <p>Dresscode: feestelijk chic. Denk: zomerbruiloft met stijl. Dus ja, je mag die leuke hoed opzetten.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Kan ik blijven slapen?</h3>
            <p>Absoluut! <a href="https://campinghoutum.be/" target="_blank" className="underline text-[#3b3a30]">Camping Houtum</a> ligt vlak achter de feestzaal en is ideaal voor wie nog wat wil nagenieten (of uitbollen na de dansvloer).</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Tot hoe laat gaat het feest?</h3>
            <p>Zolang de liefde voelbaar is en de benen willen dansen. Of tot Maarten de polonaise inzet, dan weten we dat het tijd is om naar huis te gaan ;)</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default WeddingInvitation;
