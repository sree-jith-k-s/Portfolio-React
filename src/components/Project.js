import React from 'react';
import '../assets/css/meyawo.css';
import '../assets/vendors/vendors.css'

const Project = () => (
    <section className="section" id="project">
        <div className="container text-center">
            <p className="section-subtitle">What I did ?</p>
            <h2 className="section-title mb-6">Project</h2>
            <div className="bg-white p-6 shadow-lg rounded-lg">
                <div className="container mx-auto">
                    <div className="mb-4 border-l-4 border-blue-500 pl-4 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center">
                                <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-4 text-white">📁</span>
                                <div>
                                    <h3 className="font-semibold">Web Based Billing Software For A Garments Shop</h3>
                                    <p><strong>Platform:</strong> Windows/Linux</p>
                                    <p><strong>Language Used:</strong> PHP</p>
                                    <p><strong>Database:</strong> MYSQL</p>
                                    <p><strong>Web Server:</strong> XAMPP</p>
                                </div>
                            </div>
                            <span className="text-sm text-zinc-600">Mar 2023 - May 2023</span>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>
);

export default Project;
