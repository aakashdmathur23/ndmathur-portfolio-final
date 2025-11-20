import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const stats = [
    { label: 'Years of Teaching', value: '47+' },
    { label: 'Research Papers', value: '70+' },
    { label: 'PhD Supervisions', value: '34+' },
    { label: 'Lectures Delivered', value: '3000+' },
  ];

  return (
    <div className="bg-platinum min-h-screen text-black font-body">
      <section className="text-center py-12 px-4 bg-gradient-to-b from-oxford_blue to-oxford_blue-600 text-white">
        <motion.img
          src="/assets/gallery52.jpeg"
          alt="Prof. N.D. Mathur"
          className="w-56 h-56 rounded-full mx-auto mb-6 shadow-xl object-cover p-1 bg-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="font-heading text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Prof. (Dr.) N. D. Mathur
        </motion.h1>
        <p className="mt-2 text-lg text-orange_web-500 font-medium">
          President (Vice-Chancellor), Vivekananda Global University, Jaipur
        </p>
        <p className="italic mt-4 text-platinum-900">
          “A lifetime dedicated to education, economics, and human excellence.”
        </p>
      </section>
      {/* === Profile Summary Section === */}
      <section className="bg-white py-12 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-8xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-3xl font-heading font-bold text-oxford_blue">
            Profile Summary
          </h2>

          <div className="mt-6 bg-platinum p-6 rounded-2xl shadow-md border border-platinum-300">
            <p className="text-black-700 leading-relaxed text-md md:text-lg">
              Professor N. D. Mathur is presently working as President (Vice-Chancellor) at Vivekananda Global University, Jaipur. Professor Mathur was Dean, Jaipur School of Economics and School of Humanities and Social Science (Oct 2021 - Nov 2024) at JECRC University, Jaipur. Professor Mathur has been Professor of Economics and Director, School of Humanities and Social Sciences (Oct 2016-Oct 2021) at Manipal University, Jaipur during Oct 024 to Oct 2024. Professor Mathur has been a senior Professor in the Department of Economic Administration and Financial Management, University of Rajasthan, Jaipur. Besides this he has held the administrative position of Director, University Five Year Law College and Director, Administrative Services Pre-Training Center (APTC), University of Rajasthan, Jaipur. Professor Mathur is member UGC Committee deciding 2(f) status of universities. He was also member of UGC Committee for North East Scholarship viz ISHAN UDAL. He is amongst rare Professor who have enjoyed full fledged Professorship in the disciplines of Economics, Commerce and Management. Professor Mathur is a very senior Assessor in National Assessment and Accreditation Council.

              Professor Mathur is an Academician par excellence and has justified various academic and administrative positions viz Dean, faculty of Management at SMVD University, Jammu and Kashmir (July 2015-June 2007) and Central University of Rajasthan (July 2010-July 2011), Kishangarh. He was member of Rajasthan University Syndicate (2015) and Senate. He is former Director UGC Academic Staff College and University Central Library, University of Rajasthan, Jaipur.

              Professor Mathur is an inter-disciplinary expert in the field of economics, commerce, management, academic training, administrative training and coaching. He has around 47 years of teaching experience in various Universities. Professor Mathur has published around 70 research papers to his credit in reputed research journals including SCOPUS indexed journals. Thirty-six students have been awarded Ph.D. degree and post-doctoral degree under his supervision. He has delivered around 3000 special lectures as Keynote speaker/Chairperson/ Resource Person/ Guest of Honor in last two decades. He is a prolific author and authored around 7 textbooks and 20 reference book/edited books in the field of Commerce/Management /Training. He is an expert academic trainer who imparts soft skill training to the trainers. He is an extensive visitor of various UGC HRD Centers of the country. As a teacher he is loved by his students for his oratory skills and humorous participative teaching.

              Professor Mathur is Board Member and Academic Consultant (Projects) in WAMULA INTERNATIONAL, Bulimbo, Kenya which is a reputed research-based NGO of Kenya. Professor Mathur has been conferred upon National Excellence Award (March 2021, National Human Rights Organization) for the impeccable academic research in the field of Economic Development. He is also recipient of Dr. APJ Abdul Kalam National Award-2021. Besides this he was awarded with Dr. Sarvepalli Radhakrishnan Award on Teacher's Day in 2021 which was a life time achievement award conferred by Swarna Bharat Pariwar. He was conferred with Award for Excellence in Education on Teacher's Day of 2022 by Simply Jaipur organization. Professor Mathur has been conferred upon Lifetime Achievement Award (2023) by INSPIRA Research Association a highly reputed research organization of the country. Nominated as Member of the Quality Council of India for Rajasthan police by DGP Rajasthan. He has been honored with Bharat Samman Award 2025 in the category of Educationist from Global Excellence Forum a Unit of National Human Right Organisation, New Delhi. On Teachers' Day i.e. 5th September, 2025, accorded with Lifetime Achievement Award in Education by Thar Sarvoday Sansthan, Simply Jaipur and Raghu Sinha Mala Mathur Charity Trust, honored with the Academic Transformation Award 2025 by University of Engineering & Management in November 2025 and recipient of the Galvanizer Award by Jay Janani Sansthan in November 2025.
            </p>
          </div>
        </motion.div>
      </section>


      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <p className="text-3xl font-bold text-orange_web-500">{s.value}</p>
            <p className="text-sm text-black-600">{s.label}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
