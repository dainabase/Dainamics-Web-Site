
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import CursorEffects from '@/components/CursorEffects';

export default function TermsOfService() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dainamics-background to-dainamics-background/90">
      <EnhancedGridBackground />
      <CursorEffects />
      <Navigation />
      
      {/* Header */}
      <motion.section 
        className="relative py-20 md:py-32"
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-dainamics-light mb-6">
            <span className="text-gradient-primary glow">Terms of Service</span>
          </h1>
          <p className="text-lg md:text-xl text-dainamics-light/70 max-w-3xl mx-auto">
            General Terms and Conditions for Dainamics Services
          </p>
        </div>
      </motion.section>

      {/* Content */}
      <motion.section 
        className="pb-20"
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-dainamics-light/5 backdrop-blur-sm border border-dainamics-light/10 rounded-2xl p-8 md:p-12">
              <ScrollArea className="h-[70vh] pr-4">
                <div className="legal-content text-dainamics-light/90 space-y-8">
                  
                  <div>
                    <h2 className="text-2xl font-bold text-dainamics-primary mb-4">GENERAL TERMS AND CONDITIONS</h2>
                    <p className="text-lg font-semibold text-dainamics-light mb-6">HMF Corporation SA - Dainamics</p>
                  </div>

                  <Separator className="bg-dainamics-light/20" />

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">1. Introduction</h3>
                    <p className="leading-relaxed text-justify">
                      These General Terms and Conditions (hereinafter "GTC") govern the contractual relationship between HMF Corporation SA (hereinafter "HMF Corporation SA") and any legal entity or natural person (hereinafter "the Customer") subscribing to the services offered via the Dainamics platform. By using the Dainamics website and services, you accept without reservation the following provisions, established in compliance with applicable legislation in Switzerland, the European Union, the United States, and other jurisdictions where our services are available.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">2. Services</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      HMF Corporation SA offers, via Dainamics, a SaaS platform dedicated to AI support for companies. Services include (but are not limited to):
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                      <li>Help in obtaining financing</li>
                      <li>Consulting and support in legal matters</li>
                      <li>Marketing expertise</li>
                      <li>Call management</li>
                      <li>Writing emails</li>
                      <li>As well as any other service or functionality that may be offered by Dainamics</li>
                    </ul>
                    <p className="leading-relaxed text-justify">
                      Any unauthorized use, resale, sublicense, or sharing of the platform is strictly prohibited.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">3. Subscriptions and Payments</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Subscription Plans</h4>
                        <p className="leading-relaxed text-justify">
                          Dainamics services are accessible via different monthly or annual subscriptions. Customers can choose from the plans offered on the website or via a separate contract.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Payment</h4>
                        <p className="leading-relaxed text-justify">
                          Subscription payments are due in advance, by direct debit or credit card, according to the terms indicated at the time of subscription. The subscription price may be revised, in which case HMF Corporation SA will inform the Customer by any appropriate means (email, website publication, etc.) before the new price comes into effect.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">No Minimum Commitment</h4>
                        <p className="leading-relaxed text-justify">
                          Unless otherwise indicated, subscribing to Dainamics does not include a minimum commitment. However, the customer is obliged to pay in full for the period already started.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">4. Renewal and Termination of Subscriptions</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      In the absence of cancellation by the Customer under the conditions set out below, monthly or annual subscriptions may be renewed automatically for a period equivalent to that initially subscribed.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Cancellation Policy</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-dainamics-light">Cancellation at the Customer's Initiative</h5>
                            <p className="leading-relaxed text-justify">
                              <strong>Monthly subscription:</strong> The Customer may cancel the monthly subscription at any time by sending a written request (email or other means provided by HMF Corporation SA). Cancellation takes effect the following month. The customer remains liable for the current month.
                            </p>
                            <p className="leading-relaxed text-justify">
                              <strong>Annual subscription:</strong> In the event of cancellation of an annual subscription, there is no refund (full or partial) for the remaining period.
                            </p>
                            <p className="leading-relaxed text-justify">
                              <strong>Effect of termination:</strong> In the event of termination, access to services is cut off as soon as the termination takes effect. There is no extension until the end of the billing period, unless expressly stated otherwise.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Termination for Default</h4>
                        <p className="leading-relaxed text-justify">
                          HMF Corporation SA reserves the right to immediately suspend or terminate the Customer's subscription in the event of non-payment, illicit use or use contrary to the GTC, or any clear infringement of intellectual property rights.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Termination Fees</h4>
                        <p className="leading-relaxed text-justify">
                          Unless otherwise stipulated in a specific commercial offer, no early termination fee is payable. However, the customer will not be entitled to any pro rata refund for the remaining period.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">5. Refund Policy</h3>
                    <p className="leading-relaxed text-justify">
                      Except in cases covered by article [Renewal and Termination of Subscriptions], where no refund is due (annual subscription, etc.), you may request a refund. For any request, the Customer must justify their dissatisfaction and address their request to <a href="mailto:info@dainamics.ch" className="text-dainamics-primary hover:underline">info@dainamics.ch</a>. Specific conditions and processing times will be communicated to the customer on a case-by-case basis.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">6. Use of Services</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Recipients of Services</h4>
                        <p className="leading-relaxed text-justify">
                          Dainamics services are intended exclusively for legally constituted companies and professionals. Any use for personal purposes or unrelated to a professional activity is not covered by these GTC.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">User Obligations</h4>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>The user agrees to comply with all applicable laws and regulations.</li>
                          <li>The user guarantees the truthfulness and conformity of the information provided, in particular that required for invoicing and payment.</li>
                          <li>The user agrees not to infringe the intellectual property rights of HMF Corporation SA or third parties.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Responsibility for Generated Content</h4>
                        <p className="leading-relaxed text-justify">
                          When using AI functions to create or generate content (email, texts, etc.), the customer remains solely responsible for the final content and its use.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">7. Protection of Personal Data</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      HMF Corporation SA processes personal data in compliance with applicable data protection legislation in the jurisdictions where we operate, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                      <li>The Federal Data Protection Act (FDPA) in Switzerland</li>
                      <li>The General Data Protection Regulation (GDPR) for customers based in the European Union or the European Economic Area</li>
                      <li>The California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA) for California residents</li>
                      <li>Other applicable US state laws on data protection</li>
                    </ul>
                    <p className="leading-relaxed text-justify mb-4">
                      The collected data is used to provide, maintain, and improve our services.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">International Data Transfers</h4>
                        <p className="leading-relaxed text-justify mb-3">
                          As a company operating globally, HMF Corporation SA may need to transfer personal data between different jurisdictions, particularly between Switzerland, the European Union, and the United States. These transfers are governed by:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Standard contractual clauses approved by the competent authorities</li>
                          <li>Our compliance with the EU-US Data Privacy Framework and the Swiss-US Data Privacy Framework for transfers to the United States</li>
                          <li>Other appropriate legal mechanisms for data transfer</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Specific Rights by Jurisdiction</h4>
                        <div className="space-y-3">
                          <p className="leading-relaxed text-justify">
                            <strong>For customers located in Switzerland and the European Union:</strong> You have the rights of access, rectification, erasure, restriction of processing, data portability, and objection.
                          </p>
                          <p className="leading-relaxed text-justify">
                            <strong>For customers located in California (United States):</strong> You have specific rights under the CCPA/CPRA, including the right to know what personal information is collected, the right to request the deletion of your personal information, the right to opt out of the sale of your personal information, and the right to non-discrimination for exercising these rights.
                          </p>
                          <p className="leading-relaxed text-justify">
                            <strong>For customers located in other US states:</strong> Additional rights may apply according to the legislation of your state of residence.
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Confidentiality</h4>
                        <p className="leading-relaxed text-justify">
                          Data is never sold to third parties without your consent, unless required by law or requested by a competent authority.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Security Measures</h4>
                        <p className="leading-relaxed text-justify">
                          HMF Corporation SA implements technical and organizational measures to ensure data security and confidentiality (encryption, audits, etc.).
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Exercising Your Rights</h4>
                        <p className="leading-relaxed text-justify">
                          If you have any questions about the management of your data or wish to exercise your rights, please contact <a href="mailto:info@dainamics.ch" className="text-dainamics-primary hover:underline">info@dainamics.ch</a>.
                        </p>
                        <p className="leading-relaxed text-justify">
                          For more information, please consult our Privacy Policy available on the Dainamics website.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">8. Intellectual Property</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      All content, software, documents, and resources associated with Dainamics (including trademarks, logos, text, graphics, etc.) are protected by intellectual property rights and belong exclusively to HMF Corporation SA or its licensors.
                    </p>
                    <p className="leading-relaxed text-justify mb-4">
                      Any unauthorized reproduction, representation, modification, distribution, adaptation, or use, in any form whatsoever, is strictly prohibited.
                    </p>
                    <p className="leading-relaxed text-justify">
                      By subscribing to the services, the Customer only benefits from a personal, non-exclusive, and non-transferable right of use, strictly limited to the duration of the subscription.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">9. Limitation of Liability</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">No Guarantee of Results</h4>
                        <p className="leading-relaxed text-justify">
                          HMF Corporation SA does not guarantee specific financial or commercial results. The tools and advice offered via Dainamics are decision-making aids, but the Customer remains solely responsible for their use and the decisions made.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Indirect Damage</h4>
                        <p className="leading-relaxed text-justify">
                          HMF Corporation SA cannot be held liable for indirect damage (loss of sales, loss of data, commercial loss, etc.) resulting from the use or inability to use the platform.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Use of AI</h4>
                        <p className="leading-relaxed text-justify">
                          Answers or content generated by AI may contain errors or limitations. The customer acknowledges having been informed of this and undertakes to check the conformity and relevance of the information provided before using it.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">10. Support and Maintenance</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Technical Support</h4>
                        <p className="leading-relaxed text-justify">
                          HMF Corporation SA provides the Customer with a support service accessible by email at <a href="mailto:info@dainamics.ch" className="text-dainamics-primary hover:underline">info@dainamics.ch</a> or any other channel indicated on the website. Opening hours and response times are specified on the website or in the contractual documentation.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Maintenance</h4>
                        <p className="leading-relaxed text-justify">
                          HMF Corporation SA reserves the right to carry out planned maintenance operations that may result in temporary interruption of services. The Customer will be informed, as far as possible, with reasonable notice. In the event of emergency corrective maintenance, access to services may be suspended without notice, notably for security reasons.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">11. Force Majeure</h3>
                    <p className="leading-relaxed text-justify">
                      Neither party shall be held liable for failure to meet its contractual obligations if such failure results from a case of force majeure as defined by Swiss law and the general principles of international law (natural disaster, conflict, infrastructure failure, etc.). The obligations of the parties will be suspended for the duration of the force majeure event. If it continues beyond three (3) months, either party may terminate the contract by written notice, without compensation.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">12. Assignment of the Contract</h3>
                    <p className="leading-relaxed text-justify">
                      HMF Corporation SA reserves the right to assign or transfer this contract as well as all or part of its rights and obligations to any affiliated entity or as part of a merger, acquisition, or reorganization, subject to prior notice to the Customer. The Customer may not assign or transfer the subscription or its rights and obligations arising from these GTC to a third party without the prior written consent of HMF Corporation SA.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">13. Applicable Law and Jurisdiction</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      These GTC are governed by Swiss law. In the event of a dispute concerning the validity, interpretation, or execution of these GTC, the parties will endeavor to find an amicable solution. Failing agreement, the dispute will fall within the exclusive jurisdiction of the Cantonal Court of Fribourg.
                    </p>
                    <p className="leading-relaxed text-justify">
                      However, this jurisdiction clause shall not prevent the application of mandatory provisions of the law of the Customer's jurisdiction of residence, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                      <li>For Customers residing in the European Union, in accordance with the principles of private international law and the Brussels I bis regulation</li>
                      <li>For Customers residing in the United States, in accordance with applicable federal and state laws regarding consumer protection and dispute resolution</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">14. Modification of the GTC</h3>
                    <p className="leading-relaxed text-justify">
                      HMF Corporation SA reserves the right to modify all or part of these GTC at any time, in particular to adapt them to legislative, regulatory, or technological developments. Substantial modifications will be notified to the Customer by email or by any other appropriate means. The Customer is invited to regularly consult the updated GTC, available on the Dainamics website. By continuing to use the services after the publication of the new GTC, the Customer is deemed to accept them.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">15. Entire Agreement and Partial Nullity</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Entire Agreement</h4>
                        <p className="leading-relaxed text-justify">
                          These General Terms and Conditions, supplemented where applicable by a specific contract or order form, constitute the entire agreement between HMF Corporation SA and the Customer. They cancel and replace any previous agreement, written or oral, relating to the same subject.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-dainamics-light mb-2">Partial Nullity</h4>
                        <p className="leading-relaxed text-justify">
                          If one or more provisions of these GTC are held to be invalid or declared null and void in application of a law, regulation, or following a final decision by a competent court, the other provisions shall not be affected and shall retain their full effect.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">16. Contact</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      For any questions regarding these GTC, please contact:
                    </p>
                    <p className="leading-relaxed">
                      Email: <a href="mailto:info@dainamics.ch" className="text-dainamics-primary hover:underline">info@dainamics.ch</a>
                    </p>
                  </section>

                  <Separator className="bg-dainamics-light/20" />

                  <div className="text-center space-y-2">
                    <p className="text-dainamics-light/80">Fribourg, 20/05/2025.</p>
                    <p className="font-semibold text-dainamics-light">HMF Corporation SA</p>
                    <p className="text-sm text-dainamics-light/60">Reproduction, distribution, or reuse without written permission is prohibited.</p>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
