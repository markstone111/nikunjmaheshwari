import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificationsData, CertCategory, Certification } from '../data/certifications';
import { Award, ExternalLink, Calendar, Building2, Filter, Hash } from 'lucide-react';

// ─── Constants ────────────────────────────────────────────────────────────────

const FILTER_CATEGORIES: CertCategory[] = [
  'All',
  'AI / ML',
  'Hackathons',
  'Development',
  'Design',
  'Career',
];

const CATEGORY_STYLES: Record<string, { bg: string; activeFilter: string }> = {
  'AI / ML':     { bg: 'bg-brutal-green',  activeFilter: 'bg-brutal-green text-black' },
  'Hackathons':  { bg: 'bg-brutal-yellow', activeFilter: 'bg-brutal-yellow text-black' },
  'Development': { bg: 'bg-brutal-blue',   activeFilter: 'bg-brutal-blue text-black' },
  'Design':      { bg: 'bg-brutal-pink',   activeFilter: 'bg-brutal-pink text-black' },
  'Career':      { bg: 'bg-brutal-purple', activeFilter: 'bg-brutal-purple text-black' },
};

// ─── Certificate Card ─────────────────────────────────────────────────────────

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const [imgError, setImgError] = useState(false);
  const style = CATEGORY_STYLES[cert.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
      className="group relative flex flex-col border-4 border-black shadow-brutal bg-white dark:bg-tars-gray hover:-translate-y-2 hover:-translate-x-1 hover:shadow-brutal-lg transition-all duration-300"
    >
      {/* ── Image Section ── */}
      <div className="relative w-full aspect-[4/3] overflow-hidden border-b-4 border-black bg-gray-100 dark:bg-tars-board shrink-0">
        {!imgError ? (
          <img
            src={cert.imageUrl}
            alt={cert.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Placeholder if image missing */
          <div
            className={`w-full h-full ${style.bg} flex flex-col items-center justify-center gap-4`}
          >
            <Award className="w-14 h-14 text-black opacity-25" />
            <span className="font-black text-black/40 text-xs uppercase tracking-[0.2em] text-center px-4 leading-relaxed">
              {cert.issuer}
            </span>
          </div>
        )}

        {/* Category stamp — top-right of image */}
        <div
          className={`absolute top-3 right-3 px-2.5 py-1 border-2 border-black ${style.bg} text-black text-[10px] font-black uppercase tracking-widest shadow-brutal-sm`}
        >
          {cert.category}
        </div>
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col flex-grow p-5 gap-3">

        {/* Title */}
        <h3 className="text-base md:text-lg font-black text-black dark:text-white uppercase leading-tight tracking-tight line-clamp-2">
          {cert.name}
        </h3>

        {/* Issuer + Date */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Building2 className="w-3.5 h-3.5 shrink-0" />
            <span className="font-bold truncate">{cert.issuer}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span className="font-mono font-bold">{cert.date}</span>
          </div>
        </div>

        {/* Description */}
        {cert.description && (
          <p className="text-xs text-gray-600 dark:text-gray-400 font-medium border-l-4 border-black pl-3 leading-relaxed">
            {cert.description}
          </p>
        )}

        {/* Skills pills */}
        {cert.skills && cert.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {cert.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 text-[10px] font-black border-2 border-black bg-brutal-yellow text-black shadow-brutal-sm uppercase tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Credential Section */}
        <div className="pt-3 border-t-2 border-dashed border-gray-300 dark:border-gray-600 mt-auto">
          {cert.credentialUrl ? (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-4 py-2.5 bg-black text-white border-2 border-black font-black text-xs uppercase tracking-widest hover:bg-brutal-green hover:text-black transition-colors group/btn"
            >
              <span>View Credential</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          ) : cert.credentialId ? (
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400 dark:text-gray-500 truncate">
              <Hash className="w-3 h-3 shrink-0" />
              <span className="truncate">{cert.credentialId}</span>
            </div>
          ) : (
            <div className="text-[10px] font-mono text-gray-400 dark:text-gray-600 italic">
              Participation Certificate
            </div>
          )}
        </div>

      </div>
    </motion.div>
  );
}

// ─── Stats Block ──────────────────────────────────────────────────────────────

function StatBlock({
  value,
  label,
  colorClass,
  delay,
}: {
  value: string;
  label: string;
  colorClass: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`flex flex-col px-7 py-4 border-4 border-black -ml-1 first:ml-0 ${colorClass}`}
    >
      <span className="text-4xl md:text-5xl font-black text-black leading-none">{value}</span>
      <span className="text-[10px] font-black text-black uppercase tracking-[0.2em] mt-1">{label}</span>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CertificationsPage() {
  const [activeFilter, setActiveFilter] = useState<CertCategory>('All');

  const filtered =
    activeFilter === 'All'
      ? certificationsData
      : certificationsData.filter((c) => c.category === activeFilter);

  return (
    <section className="min-h-screen bg-brutal-bg dark:bg-tars-board pb-24 pt-28 px-6 md:px-12 lg:px-24 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Hero Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          {/* Label badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 border-2 border-black bg-brutal-green text-black font-bold shadow-brutal-sm text-sm uppercase tracking-widest mb-5"
          >
            <Award className="w-4 h-4" />
            Verified Credentials
          </motion.div>

          {/* Main heading */}
          <h1 className="text-[3.5rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9rem] font-black text-black dark:text-white uppercase tracking-tighter leading-[0.85] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] dark:drop-shadow-[4px_4px_0_rgba(74,222,128,1)]">
            CERTIFIED.
          </h1>

          {/* Stats row */}
          <div className="flex flex-wrap mt-8">
            <StatBlock value={String(certificationsData.length)} label="Certifications" colorClass="bg-brutal-yellow" delay={0.3} />
            <StatBlock value="7+" label="Issuers" colorClass="bg-brutal-blue" delay={0.4} />
            <StatBlock value="5" label="Categories" colorClass="bg-brutal-pink" delay={0.5} />
          </div>
        </motion.div>

        {/* ── Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              Filter by category
            </span>
          </div>
          <div className="flex flex-wrap gap-0">
            {FILTER_CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 border-2 border-black font-black text-sm uppercase tracking-widest transition-all duration-200 ${
                  i > 0 ? '-ml-[2px]' : ''
                } ${
                  activeFilter === cat
                    ? 'bg-black text-white dark:bg-brutal-green dark:text-black z-10 relative shadow-brutal-sm scale-[1.03]'
                    : 'bg-white dark:bg-tars-gray text-black dark:text-white hover:bg-brutal-yellow hover:text-black hover:z-10 hover:relative'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Result Count ── */}
        <motion.p
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 font-mono text-sm font-bold text-gray-500 dark:text-gray-400"
        >
          // showing {filtered.length} {filtered.length === 1 ? 'record' : 'records'}
        </motion.p>

        {/* ── Certificate Grid ── */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, index) => (
              <CertCard key={cert.id} cert={cert} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Empty State ── */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full p-20 border-4 border-black bg-brutal-yellow text-center shadow-brutal text-2xl font-black uppercase"
          >
            No records in this category yet.
          </motion.div>
        )}

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 border-4 border-black p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-brutal-lg hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300"
          style={{ background: 'linear-gradient(135deg, #4ade80 0%, #93c5fd 100%)' }}
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter leading-tight">
              Always Learning.
            </h2>
            <p className="text-black/70 font-bold mt-2 text-lg">
              More credentials on the way — curiosity never stops.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/nikunjm111/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white px-8 py-4 border-4 border-black font-black text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[4px_4px_0_rgba(0,0,0,1)] shrink-0"
          >
            <ExternalLink className="w-5 h-5" />
            <span>View on LinkedIn</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
