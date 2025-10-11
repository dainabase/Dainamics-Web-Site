
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-dainamics-background">
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
            <span className="text-gradient-primary glow">Privacy Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-dainamics-light/70 max-w-3xl mx-auto">
            Data Processing Policy for Dainamics Services
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
                    <h2 className="text-2xl font-bold text-dainamics-primary mb-4">DATA PROCESSING POLICY</h2>
                    <p className="text-lg font-semibold text-dainamics-light mb-6">HMF Corporation SA - Dainamics Platform</p>
                  </div>

                  <Separator className="bg-dainamics-light/20" />

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">What is the purpose of our Privacy Policy?</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      HMF Corporation SA, which manages the Dainamics platform, attaches great importance to the protection and confidentiality of your personal data, which we consider to be a guarantee of reliability and trust.
                    </p>
                    <p className="leading-relaxed text-justify">
                      In this respect, our Personal Data Privacy Policy precisely reflects our commitment to ensure compliance, within HMF Corporation SA, with the rules applicable to the protection of personal data and, more specifically, those of the Swiss Federal Data Protection Act (FADP), the European General Data Protection Regulation (GDPR), and applicable laws in other jurisdictions where we operate.
                    </p>
                    <p className="leading-relaxed text-justify">
                      In particular, our Privacy Policy aims to inform you about how and why we process your personal data in connection with the services we provide to you.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">Who can benefit from our Privacy Policy?</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      Our Privacy Policy applies to you, regardless of where you live, as long as you are at least 15 years old and are a user of our Dainamics platform.
                    </p>
                    <p className="leading-relaxed text-justify mb-4">
                      If you are under the legal age detailed above, you are not authorized to use our services without the prior and explicit consent of one of your parents or the holder of parental authority, which must be sent to us by email at <a href="mailto:info@dainamics.ch" className="text-dainamics-primary hover:underline">info@dainamics.ch</a>.
                    </p>
                    <p className="leading-relaxed text-justify">
                      If you believe that we are holding personal data about your children without your consent, please contact us at the dedicated address detailed above.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">Why do we process your personal data and on what basis?</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      We process your personal data mainly for the following purposes:
                    </p>
                    <ul className="list-disc list-inside space-y-3 ml-4 mb-4">
                      <li>To use and benefit from our service of artificial intelligence virtual assistants, specially designed to support you in your entrepreneurial missions (help in obtaining financing, legal advice, marketing expertise, call management or email writing), on the basis of our general conditions of use.</li>
                      <li>To manage user accounts (e.g. account creation, access to the service and account deletion) on the basis of our general terms of use.</li>
                      <li>To manage administrator accounts (e.g. account creation, access to the service and account deletion) on the basis of our general terms of use.</li>
                      <li>To verify the sincerity of the information provided at the time of your registration on the basis of our legal obligation. Validation of your account is carried out manually by our teams.</li>
                      <li>To communicate with our support department via our chat/chatbot or our contact form on the basis of our general terms of use.</li>
                      <li>To pay online on the basis of our general terms and conditions of sale.</li>
                      <li>To benefit from our FAQ on the basis of our general conditions of use.</li>
                      <li>To receive our technical emails (e.g. modification of passwords, etc.) essential to the proper functioning of our service on the basis of our general conditions of use.</li>
                      <li>To be able to download and import documents on our platforms on the basis of our general conditions of use.</li>
                      <li>Through the use of a generative artificial intelligence functionality, to assist you in certain tasks (help in obtaining financing, legal advice, marketing expertise, call management or the drafting of emails, recruitment assistance, etc.) on the basis of our general terms and conditions of use.</li>
                      <li>To guarantee and reinforce the security and quality of our day-to-day services (e.g. statistics, data security, etc.) on the basis of our legal obligations, our general terms of use and our legitimate interest in ensuring the proper functioning of our services.</li>
                    </ul>
                    <p className="leading-relaxed text-justify">
                      Your data is collected directly from you when you use our Dainamics platform and we undertake to process your data only for the purposes described above.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">What personal data do we process and for how long?</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      We have summarized the categories of personal data and their respective retention periods below:
                    </p>
                    <ul className="list-disc list-inside space-y-3 ml-4 mb-4">
                      <li>For private individuals, personal identification data (e.g. surname, first name) and contact details (e.g. e-mail address) are kept for the duration of the service, plus the statutory limitation periods, which are generally 5 years.</li>
                      <li>For professionals, professional identification data (e.g. surname, first name, position, company, department, etc.) and contact details (e.g. e-mail address and business telephone number, etc.) are kept for the duration of service provision, plus the statutory limitation periods, which are generally 5 years.</li>
                      <li>For private individuals, economic and financial data (e.g. bank account number, verification code, etc.) kept for the time required to complete the transaction and manage invoicing and payments, plus the statutory limitation periods, which are generally 5 to 10 years.</li>
                      <li>For professionals, when there is confusion between the name of your structure and your personal name (e.g.: sole proprietor, small business, etc.), economic and financial data (e.g.: bank account number, verification code, etc.) kept for the time necessary for the transaction and the management of invoicing and payments, plus the statutory limitation periods, which are generally 5 to 10 years.</li>
                      <li>Email address to receive our technical messages kept until your account is deleted.</li>
                      <li>Content of exchanges entered by the user (text, questions, queries, documents) when using artificial intelligence, stored for the duration of the service.</li>
                      <li>Connection data (e.g. logs, IP address, etc.) stored for 1 year.</li>
                      <li>Financial situation and assets kept until your account is deleted, and then for a limitation period of 5 years.</li>
                    </ul>
                    <p className="leading-relaxed text-justify mb-4">
                      Once the applicable retention periods have expired, the deletion of your personal data is irreversible and we will no longer be able to communicate it to you. At most, we can only keep anonymous data for statistical purposes.
                    </p>
                    <p className="leading-relaxed text-justify">
                      Please also note that in the event of litigation, we are obliged to retain all data concerning you for the duration of the case, even after the expiry of the retention periods described above.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">What rights do you have to control the use of your personal data?</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      The applicable data protection regulations grant you specific rights which you can exercise, at any time and free of charge, to control the use we make of your data.
                    </p>
                    <ul className="list-disc list-inside space-y-3 ml-4 mb-4">
                      <li>Right to access and copy your personal data, provided this request does not conflict with business secrecy, confidentiality or the secrecy of correspondence.</li>
                      <li>Right to rectify personal data that is incorrect, outdated or incomplete.</li>
                      <li>The right to request the deletion ("right to be forgotten") of personal data that is not essential to the proper functioning of our services.</li>
                      <li>The right to limit the use of your personal data, which allows you to take a snapshot of the use of your data in the event of a dispute over the legitimacy of processing.</li>
                      <li>The right to data portability, which enables you to retrieve part of your personal data so that it can be easily stored or transmitted from one information system to another.</li>
                      <li>The right to give instructions on what to do with your data in the event of your death, either through you, a trusted third party or a beneficiary.</li>
                    </ul>
                    <p className="leading-relaxed text-justify mb-4">
                      For a request to be taken into account, it must be sent directly by you to <a href="mailto:info@dainamics.ch" className="text-dainamics-primary hover:underline">info@dainamics.ch</a>. Any request not made in this way cannot be processed.
                    </p>
                    <p className="leading-relaxed text-justify mb-4">
                      Requests cannot come from anyone other than you. We may therefore ask you to provide proof of identity if there is any doubt about the identity of the person making the request.
                    </p>
                    <p className="leading-relaxed text-justify mb-4">
                      We will respond to your request as quickly as possible, subject to a maximum of three months from receipt if the request is technically complex or if we receive many requests at the same time.
                    </p>
                    <p className="leading-relaxed text-justify">
                      Please note that we may at any time refuse to respond to any excessive or unfounded request, particularly in view of its repetitive nature.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">Who can access your personal data?</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      Your personal data is processed by our teams and by our technical service providers for the sole purpose of operating our service.
                    </p>
                    <p className="leading-relaxed text-justify mb-4">
                      We check all our technical service providers before recruiting them, to ensure that they comply scrupulously with the rules applicable to the protection of personal data.
                    </p>
                    <p className="leading-relaxed text-justify font-bold">
                      WE GUARANTEE THAT WE WILL NEVER TRANSFER OR SELL YOUR DATA TO THIRD PARTIES OR BUSINESS PARTNERS.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">Can your personal data be transferred outside Switzerland or the European Union?</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      Personal data processed by our Dainamics platform is exclusively hosted on servers located in Switzerland and within the European Union.
                    </p>
                    <p className="leading-relaxed text-justify">
                      Furthermore, we do our utmost to use only technical tools whose servers are also located in Switzerland or within the European Union. However, if this is not the case, we scrupulously ensure that they implement the appropriate guarantees required to ensure the confidentiality and protection of your personal data, notably via the EU-US Data Privacy Framework, the Swiss-US Data Privacy Framework, or appropriate standard contractual clauses.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">How do we protect your personal data?</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      We implement the following technical and organizational means to guarantee the security of your personal data on a day-to-day basis and, in particular, to combat any risk of destruction, loss, alteration or disclosure.
                    </p>
                    <div>
                      <h4 className="text-lg font-semibold text-dainamics-light mb-2">Technical safety measures</h4>
                      <p className="leading-relaxed text-justify">
                        Password database separate from user IDs, complex user passwords imposed at login, HTTPS protocol, access traceability, and other appropriate security measures.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">Do we use cookies when you browse our platforms?</h3>
                    <p className="leading-relaxed text-justify mb-4 font-bold">
                      WE GUARANTEE THAT WE DO NOT USE ANY ADVERTISING OR STATISTICAL COOKIES IN THE OPERATION OF OUR PLATFORMS.
                    </p>
                    <p className="leading-relaxed text-justify">
                      We only use the technical cookies necessary for the proper functioning of our platforms, which we recommend not to remove and which do not require a cookie banner.
                    </p>
                    <p className="leading-relaxed text-justify">
                      If, however, you still wish to object to their use, you can use your browser settings by following the instructions below: Chrome, Microsoft Edge, Safari, Firefox and Opera.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">Who can you contact to obtain more information about the use of your personal data?</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      To best guarantee the protection and integrity of your data, we have officially appointed a Data Protection Officer ("DPO") to our supervisory authority.
                    </p>
                    <p className="leading-relaxed text-justify">
                      You may at any time and free of charge contact our DPO at <a href="mailto:info@dainamics.ch" className="text-dainamics-primary hover:underline">info@dainamics.ch</a> to obtain further information or details on how we process your data.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">How can you contact the data protection authority?</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      You may at any time contact the Swiss Federal Data Protection and Information Commissioner (FDPIC) at the following address: FDPIC, Feldeggweg 1, 3003 Bern, Switzerland or by telephone at +41 (0)58 462 43 95.
                    </p>
                    <p className="leading-relaxed text-justify mb-4">
                      If you reside in the European Union, you can also contact the competent supervisory authority in your country of residence.
                    </p>
                    <p className="leading-relaxed text-justify">
                      For residents of the United States, you can contact the competent authority according to your state of residence.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">Can the Privacy Policy be modified?</h3>
                    <p className="leading-relaxed text-justify">
                      We may modify our Privacy Policy at any time to adapt it to new legal requirements and to new processing operations that we may implement in the future.
                    </p>
                  </section>

                  <Separator className="bg-dainamics-light/20" />

                  <div className="text-center space-y-2">
                    <p className="text-dainamics-light/80">Fribourg, 20/05/2025.</p>
                    <p className="font-semibold text-dainamics-light">HMF Corporation SA</p>
                    <p className="text-sm text-dainamics-light/60">Reproduction, distribution or reuse without written permission is prohibited.</p>
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
