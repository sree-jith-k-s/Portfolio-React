import React from 'react';
import '../assets/css/meyawo.css';
import '../assets/vendors/vendors.css'

const Profile = () => (
    <section className="section" id="profile">
        <div className="container text-center">
            <h2 className="section-title mb-3">Profile</h2>
            <div className="table-responsive" align='center'>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Basic Details</th>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>Sreejith K S</td>
                        </tr>
                        <tr>
                            <td>Date of Birth:</td>
                            <td>21-04-2003</td>
                        </tr>
                        <tr>
                            <td>Nationality:</td>
                            <td>Indian</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Contact Information</th>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>sreejithksrvsn@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>+91 8129589118</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Address</th>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>Kollamparampil </td>
                        </tr>
                        <tr>
                            <td>Street:</td>
                            <td>Kadapra Mannar</td>
                        </tr>
                        <tr>
                            <td>District & City:</td>
                            <td>Pathanamthitta,Thiruvalla</td>
                        </tr>
                        <tr>
                            <td>State:</td>
                            <td>Kerala</td>
                        </tr>
                        <tr>
                            <td>Country:</td>
                            <td>India</td>
                        </tr>
                        <tr>
                            <td>Pincode:</td>
                            <td>689621</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <section id="resume" className="py-5 bg-light">
                <div className="container">
                    <h2 className="mb-4 text-center">Resume/CV</h2>
                    <p className="lead text-center">Download my resume <a href="path/to/resume.pdf" target="_blank">
                        <br /><button className="btn-rounded btn btn-outline-primary mt-4">Download</button></a></p>
                </div>
            </section>
        </div>
    </section>
);

export default Profile;
