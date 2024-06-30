import React from 'react';
import '../assets/css/meyawo.css';
import '../assets/vendors/vendors.css'

const Education = () => (
    <section className="section" id="education">
        <div className="container text-center">
            <p className="section-subtitle">What I Studied ?</p>
            <h6 className="section-title mb-6">Education</h6>
            <div className="bg-white p-6 shadow-lg rounded-lg">
                <div className="container mx-auto">
                    <div className="mb-4 border-l-4 border-blue-500 pl-4 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center">
                                <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-4 text-white">🎓</span>
                                <div>
                                    <h3 className="font-semibold">Indira Gandhi College of Arts and Science, Nellikuzhi, Kothamangalam</h3>
                                    <p><strong>Bachelor of Computer Application</strong> </p>
                                </div>
                            </div>
                            <span className="text-sm text-zinc-600">Jun 2021 - Mar 2024</span>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="bg-white p-6 shadow-lg rounded-lg">
                <div className="container mx-auto">
                    <div className="mb-4 border-l-4 border-blue-500 pl-4 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center">
                                <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-4 text-white">🎓</span>
                                <div>
                                    <h3 className="font-semibold">Model Technical Higher Secondary School, Kaprassery</h3>
                                    <p><strong>Plus Two</strong> </p>
                                </div>
                            </div>
                            <span className="text-sm text-zinc-600">2019 - 2021</span>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="bg-white p-6 shadow-lg rounded-lg">
                <div className="container mx-auto">
                    <div className="mb-4 border-l-4 border-blue-500 pl-4 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center">
                                <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-4 text-white">🎓</span>
                                <div>
                                    <h3 className="font-semibold">P.B.M.H.S.S, Angadical South</h3>
                                    <p><strong>High School</strong></p>
                                </div>
                            </div>
                            <span className="text-sm text-zinc-600">2018 - 2019</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Education;
