'use client';

import { useState } from 'react';
import { Sparkles, Shield, Star, ArrowRight, CalendarCheck, Search } from 'lucide-react';
import { HeroSectionProps, SPECIALTIES, TIME_SLOTS } from '@/types/heroProps';

export default function HeroSection({ onGetMatched, onHowItWorks, onFindDoctor }: HeroSectionProps) {
    const [symptoms, setSymptoms] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [preferredTime, setPreferredTime] = useState('');

    const handleSubmit = () => {
        onFindDoctor?.({ symptoms, specialty, preferredTime });
    };

    return (
        <div className=' w-full relative'>
            <div
                className="absolute inset-0 z-0"
                style={{ background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)" }}
            />
            {/* Your Content/Components */}
            <section className="  lg:py-6 px-4 sm:px-6 relative">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* ================= LEFT SIDE ================= */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 mb-6">
                            <Sparkles size={16} />
                            <span className="text-sm font-medium">
                                AI-Powered Healthcare
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                            Find the right doctor
                            <span className="text-teal-600">
                                {' '}with AI
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
                            Describe your symptoms and our intelligent system will
                            match you with top-rated specialists for a secure video
                            consultation from the comfort of your home.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            {/* AI Match Button */}
                            <button
                                onClick={onGetMatched}
                                className="group inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-6 h-12 rounded-xl font-medium shadow-lg shadow-teal-700/20 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <Sparkles className="w-4 h-4" />

                                <span>Get Matched Now</span>

                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>

                            {/* Appointment Button */}
                            <button
                                onClick={onHowItWorks}
                                className="group inline-flex items-center justify-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-6 h-12 rounded-xl font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200"
                            >
                                <CalendarCheck className="w-4 h-4 text-teal-600" />

                                <span>Book Appointment</span>
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="mt-10 pt-6 border-t border-slate-200">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                                {/* Patients Served */}
                                <div className="text-center sm:text-left">
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        50,000+
                                    </h3>
                                    <p className="text-sm text-slate-600">
                                        Patients Served
                                    </p>
                                </div>

                                {/* Expert Doctors */}
                                <div className="text-center sm:text-left">
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        1,200+
                                    </h3>
                                    <p className="text-sm text-slate-600">
                                        Expert Doctors
                                    </p>
                                </div>

                                {/* Patient Rating */}
                                <div className="text-center sm:text-left">
                                    <div className="flex items-center justify-center sm:justify-start gap-1">
                                        {[1, 2, 3, 4, 5].map((item) => (
                                            <Star
                                                key={item}
                                                size={16}
                                                className="fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                        <span className="ml-2 text-2xl font-bold text-slate-900">
                                            4.9
                                        </span>
                                    </div>

                                    <p className="text-sm text-slate-600 mt-1">
                                        Patient Rating
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="relative">

                        {/* Background Glow */}
                        <div className="absolute -top-6 right-0 w-32 h-32 bg-teal-200 rounded-full blur-3xl opacity-40" />
                        <div className="absolute -bottom-6 left-0 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-40" />

                        <div className="relative bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden">

                            <div className="h-1.5 bg-gradient-to-r from-teal-500 to-emerald-400" />

                            <div className="p-6 lg:p-8">

                                {/* Card Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                                        <Sparkles
                                            size={18}
                                            className="text-teal-700"
                                        />
                                    </div>

                                    <h2 className="text-2xl font-semibold">
                                        AI Doctor Finder
                                    </h2>
                                </div>

                                {/* Symptoms */}
                                <div className="mb-5">
                                    <label className="block text-sm font-medium mb-2">
                                        What do you need help with?
                                    </label>

                                    <textarea

                                        value={symptoms}
                                        onChange={(e) =>
                                            setSymptoms(e.target.value)
                                        }
                                        placeholder="I've had a persistent headache for 3 days..."
                                        className="w-full border border-slate-200 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>

                                {/* Selects */}
                                <div className="grid sm:grid-cols-2 gap-4 mb-5">

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Specialty
                                        </label>

                                        <select
                                            value={specialty}
                                            onChange={(e) =>
                                                setSpecialty(e.target.value)
                                            }
                                            className="w-full h-11 border border-slate-200 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        >
                                            <option value="">
                                                Select Specialty
                                            </option>

                                            {SPECIALTIES.map((item) => (
                                                <option
                                                    key={item}
                                                    value={item}
                                                >
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Preferred Time
                                        </label>

                                        <select
                                            value={preferredTime}
                                            onChange={(e) =>
                                                setPreferredTime(e.target.value)
                                            }
                                            className="w-full h-11 border border-slate-200 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        >
                                            <option value="">
                                                Select Time
                                            </option>

                                            {TIME_SLOTS.map((item) => (
                                                <option
                                                    key={item}
                                                    value={item}
                                                >
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    onClick={handleSubmit}
                                    className="w-full h-12 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition"
                                >
                                    <Search size={18} />
                                    Find Your Doctor
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}