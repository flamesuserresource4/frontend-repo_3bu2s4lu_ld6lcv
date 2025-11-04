import React from 'react';
import { BookOpen, CheckCircle2, Trophy, Users } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Kurikulum Terstruktur',
    desc: 'Susun modul, bab, dan pelajaran dengan mudah untuk alur belajar yang jelas.'
  },
  {
    icon: CheckCircle2,
    title: 'Kuis & Evaluasi',
    desc: 'Buat kuis, tugas, dan pantau hasil dengan analitik mendalam.'
  },
  {
    icon: Users,
    title: 'Kelas Kolaboratif',
    desc: 'Forum diskusi, pesan, dan kelompok belajar untuk kolaborasi aktif.'
  },
  {
    icon: Trophy,
    title: 'Gamifikasi',
    desc: 'Poin, lencana, dan peringkat untuk meningkatkan motivasi belajar.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Semua yang Anda butuhkan untuk LMS</h2>
          <p className="mt-3 text-gray-600">Rancang pengalaman belajar yang lengkap: dari konten hingga evaluasi, semuanya di satu tempat.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
