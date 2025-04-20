'use client';
import { useRef } from "react";
import { FaGraduationCap, FaCertificate, FaAward } from "react-icons/fa";
import useReveal from "@/hooks/use-reveal";
import { portfolioData } from "@/data/portfolioData";



const EducationItem = ({ education, icon: Icon, iconBgColor, forwardedRef }) => (
  <div 
    ref={forwardedRef} 
    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg reveal"
  >
    <div className="flex items-center mb-4">
      <div className={`w-12 h-12 rounded-full ${iconBgColor} flex items-center justify-center text-white mr-4`}>
        <Icon classMongoDBName="text-xl" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-primary">{education.degree}</h3>
        <p className="text-gray-600">{education.institution} {education.period}</p>
      </div>
    </div>
    <p className="text-gray-700 mt-4">
      {education.description}
    </p>
  </div>
);



const CertificationItem = ({ certification, colorClass, forwardedRef }) => (
  <div 
    ref={forwardedRef} 
    className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-center reveal"
  >
    <div className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center mr-4`}>
      <FaAward />
    </div>
    <div>
      <h4 className="font-medium text-gray-800">{certification.name}</h4>
      <p className="text-gray-600 text-sm">{certification.issuer}, {certification.year}</p>
    </div>
  </div>
);

const Education = () => {
  const titleRef = useRef(null);
  const edu1Ref = useRef(null);
  const edu2Ref = useRef(null);
  const certTitleRef = useRef(null);
  const cert1Ref = useRef(null);
  const cert2Ref = useRef(null);
  const cert3Ref = useRef(null);
  const cert4Ref = useRef(null);

  // Apply reveal animation
  useReveal(titleRef);
  useReveal(edu1Ref);
  useReveal(edu2Ref);
  useReveal(certTitleRef);
  useReveal(cert1Ref);
  useReveal(cert2Ref);
  useReveal(cert3Ref);
  useReveal(cert4Ref);

  const { education, certifications } = portfolioData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Education</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">My academic background and qualifications</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <EducationItem 
            education={education[0]} 
            icon={FaGraduationCap} 
            iconBgColor="bg-primary" 
            forwardedRef={edu1Ref} 
          />
        </div>
        
        <div ref={certTitleRef} className="mt-12 max-w-4xl mx-auto reveal">
          <h3 className="text-2xl font-semibold text-primary mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CertificationItem 
              certification={certifications[0]} 
              colorClass="bg-blue-100 text-blue-600" 
              forwardedRef={cert1Ref} 
            />
            
            <CertificationItem 
              certification={certifications[1]} 
              colorClass="bg-green-100 text-green-600" 
              forwardedRef={cert2Ref} 
            />
            
            <CertificationItem 
              certification={certifications[2]} 
              colorClass="bg-yellow-100 text-yellow-600" 
              forwardedRef={cert3Ref} 
            />
            
            <CertificationItem 
              certification={certifications[3]} 
              colorClass="bg-red-100 text-red-600" 
              forwardedRef={cert4Ref} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
