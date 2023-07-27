import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <p className='text-danger fw-bold pt-5'>Our terms and conditions:</p>
            <div>
                <p>Please read these terms and conditions carefully before using Our Service

                <p className='fw-bold  pt-5'>Interpretation and Definitions:</p>
                  
                  
                  The word of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  
        
                 
                  <p className='fw-bold pt-5'>For the purposes of these Terms and Conditions:
                  </p>
                  Affiliate means an entity that controls, is controlled by or is under common control with a party, where „control“ means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                  Country refers to Slovenia
                  Company (referred to as either “the Company“, „We“, „Us“ or „Our“ in this Agreement) refers to Analysis Adria d.o.o, Tržaška cesta 515, 1351 Brezovica pri Ljubljani
                  Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                  Service refers to the Website
                  Terms and Conditions (also referred to as „Terms“) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and the Conditions Template.
                  Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
                  Website refers to Analysis Adria website, accessible from http://www.analysisadria.si
                  You means the individual accessing or using the Service, or the company, or legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                  Acknowledgement
                  These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                  Your access to and use of the Service is conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
                  
                   
                  
                  <p className='fw-bold pt-5'> Links to Other Websites:</p>
                  Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
                  The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of any reliance on any such content, goods or service available on or through any such web sites or services.
                  We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
                  
                  <p className='fw-bold pt-5'> Termination:</p>
                  We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.
                  
                  <p className='fw-bold pt-5 pb-5'> Limitation of Liability:</p>
                  
                  Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers for damages, that were not cause by intent or gross negligence, under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100USD if You haven’t purchased anything through the Service.
                  To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
                  Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party’s liability will be limited to the greatest extent permited by law.</p>
            </div>

            <p className='text-danger fw-bold text-center pb-5'>Back to <Link to = "/register">Register</Link></p>
        </Container>
    );
};

export default Terms;