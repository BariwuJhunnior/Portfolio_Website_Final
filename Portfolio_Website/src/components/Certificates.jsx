import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Award, ExternalLink } from "lucide-react";
import certificatesData from "../constants/certificatesData";

function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchCertificates = async () => {
      try {
        if (mounted) setCertificates(certificatesData);
      } catch (error) {
        console.error("Failed to fetch Certificates", error);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchCertificates();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading)
    return <div className="text-white text-center py-20">Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      viewport={{ once: false }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl max-auto px-6"
    >
      {certificatesData.map((certificate) => (
        <motion.div
          key={certificate.id}
          whileHover={{ y: -5 }}
          className="bg-slate-800/40 border border-slate-700 p-4 rounded-2xl flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          {/* Certificate Image Preview */}
          <div className="sm:w-40 h-28 shrink-0 bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
            <div className="w-full h-full bg-slate-800 overflow-hidden rounded-xl relative">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover p-2"
                loading="lazy"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-400 mb-1">
              <Award size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">
                {certificate.issuer}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              {certificate.title}
            </h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-2">
              {certificate.description}
            </p>

            {certificate.verify_url && (
              <a
                href={certificate.verify_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-blue-400 transition-colors"
              >
                Verify Credentials <ExternalLink size={14} />
              </a>
            )}
          </div>
        </motion.div>
      ))}

      {certificates.length === 0 && (
        <div className="text-gray-500 text-center py-10">
          No Certificates found.
        </div>
      )}
    </motion.div>
  );
}

export default Certificates;
