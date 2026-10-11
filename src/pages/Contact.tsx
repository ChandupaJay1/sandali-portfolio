import React, { useState } from 'react';
import { 
  Mail, 
  Globe, 
  School, 
  Send, 
  CheckCircle2, 
  Download, 
  ShieldCheck,
  GraduationCap,
  Phone,
  MapPin,
  ExternalLink,
  Printer
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../components/SectionHeading';
import { EditableNotice } from '../components/EditableNotice';
import { usePortfolio } from '../context/PortfolioContext';

export const Contact: React.FC = () => {
  const { profile: teacherProfile } = usePortfolio();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'University Evaluator / Lecturer',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Please provide a valid institutional email';
    if (!formData.message.trim() || formData.message.length < 10) errs.message = 'Please provide a message of at least 10 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // Fallback gracefully
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* 1. Header Section */}
      <div>
        <SectionHeading
          eyebrow="Academic & Professional Inquiries"
          title="Contact & Evaluator Inquiries"
          description="Institutional contact point for university examiners, practicum supervisors, school principals, and academic collaborators."
        />

        <EditableNotice
          sectionName="Contact Details & Institutional Affiliation"
          dataFile="src/data/teacherProfile.ts"
          details="All contact details shown below use institutional placeholders. You can supply your actual faculty email, professional LinkedIn, or department address."
        />
      </div>

      {/* 2. Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Information Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-200/90 shadow-soft space-y-6">
            <h3 className="font-serif text-xl font-bold text-forest-950">
              Institutional Contact Details
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-ivory-50 border border-forest-100">
                <div className="p-2 rounded-lg bg-forest-100 text-forest-800 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-charcoal-500 block text-xs">Official Email:</span>
                  <a href={`mailto:${teacherProfile.email}`} className="font-semibold text-forest-900 hover:underline">
                    {teacherProfile.email}
                  </a>
                  <span className="text-[11px] text-charcoal-400 block mt-0.5">(Direct Inbox)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-ivory-50 border border-forest-100">
                <div className="p-2 rounded-lg bg-forest-100 text-forest-800 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-charcoal-500 block text-xs">Telephone / WhatsApp:</span>
                  <a href={`tel:${teacherProfile.phone || '+94717025916'}`} className="font-semibold text-forest-900 font-mono hover:underline">
                    {teacherProfile.phone || '+94 717 025 916'}
                  </a>
                  <span className="text-[11px] text-charcoal-400 block mt-0.5">(Direct Contact)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-ivory-50 border border-forest-100">
                <div className="p-2 rounded-lg bg-forest-100 text-forest-800 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-charcoal-500 block text-xs">Residential / Postal Address:</span>
                  <span className="font-semibold text-forest-900 block">
                    {teacherProfile.address || '194/3, Emberalluwa North, Weliweriya, Gampaha'}
                  </span>
                  <span className="text-xs text-charcoal-600 block">
                    Western Province, Sri Lanka
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-ivory-50 border border-forest-100">
                <div className="p-2 rounded-lg bg-forest-100 text-forest-800 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-charcoal-500 block text-xs">University Affiliation:</span>
                  <span className="font-semibold text-forest-900 block">
                    {teacherProfile.faculty}
                  </span>
                  <span className="text-xs text-charcoal-600 block">
                    {teacherProfile.university}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-ivory-50 border border-forest-100">
                <div className="p-2 rounded-lg bg-forest-100 text-forest-800 shrink-0">
                  <School className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-charcoal-500 block text-xs">Teaching Academies:</span>
                  <span className="font-semibold text-forest-900 block">
                    {teacherProfile.internshipSchool}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-ivory-50 border border-forest-100">
                <div className="p-2 rounded-lg bg-forest-100 text-forest-800 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-charcoal-500 block text-xs">LinkedIn Profile:</span>
                  <a 
                    href={teacherProfile.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-semibold text-forest-900 hover:underline inline-flex items-center gap-1"
                  >
                    <span>linkedin.com/in/sandali-edirisinghe</span>
                    <ExternalLink className="w-3 h-3 text-forest-700" />
                  </a>
                </div>
              </div>

            </div>

            {/* Privacy Safeguard Notice */}
            <div className="p-4 rounded-xl bg-forest-50/70 border border-forest-200/70 flex items-start gap-2.5 text-xs text-charcoal-600">
              <ShieldCheck className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
              <span>
                <strong>Privacy Policy:</strong> In compliance with teacher education ethical guidelines, personal identification numbers and private residential details are omitted from this public e-portfolio.
              </span>
            </div>

            {/* Portfolio & CV Download Buttons */}
            <div className="pt-2 space-y-2.5">
              <a
                href="/docs/Sandali_Edirisinghe_CV.pdf"
                download="Sandali_Edirisinghe_CV.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-semibold shadow-xs transition-colors"
              >
                <Download className="w-4 h-4 text-terracotta-400" />
                <span>Download Sandali Edirisinghe Official CV (PDF)</span>
              </a>

              <button
                onClick={handlePrint}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-ivory-200 hover:bg-forest-100 text-forest-900 text-xs font-semibold border border-forest-200/80 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-forest-700" />
                <span>Print Teaching E-Portfolio Summary</span>
              </button>
            </div>

          </div>

        </div>

        {/* Right Interactive Inquiries Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-forest-200/90 shadow-soft">
            <h3 className="font-serif text-2xl font-bold text-forest-950 mb-2">
              Send an Academic or Supervision Note
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 mb-6">
              Use this message form to submit feedback regarding portfolio evidence or request complete practicum lesson documents.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-forest-50 border border-forest-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-forest-800 text-ivory-50 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-forest-950">
                  Thank You for Your Feedback!
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been recorded. As an undergraduate educator intern, I deeply value scholarly critique and mentoring guidance.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', role: 'University Evaluator / Lecturer', subject: '', message: '' });
                  }}
                  className="px-4 py-2 rounded-xl bg-forest-800 text-ivory-50 text-xs font-semibold hover:bg-forest-900 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. / Mrs. / Mr. Full Name"
                      className="w-full p-3 text-xs sm:text-sm rounded-xl border border-forest-200 bg-ivory-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-forest-800 text-charcoal-800"
                    />
                    {errors.name && <p className="text-xs text-terracotta-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                      Institutional Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@university.ac.lk"
                      className="w-full p-3 text-xs sm:text-sm rounded-xl border border-forest-200 bg-ivory-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-forest-800 text-charcoal-800"
                    />
                    {errors.email && <p className="text-xs text-terracotta-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                    Your Professional Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full p-3 text-xs sm:text-sm rounded-xl border border-forest-200 bg-ivory-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-forest-800 text-charcoal-800"
                  >
                    <option value="University Evaluator / Lecturer">University Evaluator / Practicum Director</option>
                    <option value="School Mentor / Teacher-in-Charge">School Mentor / Teacher-in-Charge</option>
                    <option value="School Principal / Sectional Head">School Principal / Sectional Head</option>
                    <option value="Fellow Teacher Intern">Fellow Teacher Intern / Colleague</option>
                    <option value="Other Academic Visitor">Other Academic Visitor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                    Subject / Area of Feedback
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Assessment Evidence Query, Lesson Plan Collaboration, Viva Voce"
                    className="w-full p-3 text-xs sm:text-sm rounded-xl border border-forest-200 bg-ivory-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-forest-800 text-charcoal-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                    Message / Feedback Remarks *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter your observations, evaluative notes, or message here..."
                    className="w-full p-3 text-xs sm:text-sm rounded-xl border border-forest-200 bg-ivory-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-forest-800 text-charcoal-800"
                  ></textarea>
                  {errors.message && <p className="text-xs text-terracotta-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-semibold shadow-md transition-all active:scale-98 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiries</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
