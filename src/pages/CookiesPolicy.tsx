
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedGridBackground from '@/components/EnhancedGridBackground';
import CursorEffects from '@/components/CursorEffects';

export default function CookiesPolicy() {
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
            <span className="text-gradient-primary glow">Legal Information and Cookies</span>
          </h1>
          <p className="text-lg md:text-xl text-dainamics-light/70 max-w-3xl mx-auto">
            HMF Corporation SA - Dainamics Platform
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

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">Legal Information</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      This site is published by HMF Corporation SA, a company registered in Switzerland, whose head office is located in Fribourg, Switzerland. HMF Corporation SA offers SaaS solutions marketed under the Dainamics brand.
                    </p>
                    <p className="leading-relaxed text-justify mb-4">
                      The publication director is Mr. Jean-Marie Delaunay, in his capacity as Co-founder and CEO.
                    </p>
                    <p className="leading-relaxed text-justify">
                      If you have any questions about this site or wish to report inappropriate content, please contact us at <a href="mailto:info@dainamics.ch" className="text-dainamics-primary hover:underline">info@dainamics.ch</a>.
                    </p>
                  </section>

                  <Separator className="bg-dainamics-light/20" />

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">Terms of Use</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      The user acknowledges having read these legal terms and undertakes to comply with them. The user is responsible for the security and updating of their computer equipment to avoid any risk of viruses. HMF Corporation SA cannot guarantee the absence of malfunctions or errors and reserves the right to modify the site at any time.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">Information Technology and Data Protection</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      In accordance with the Swiss Federal Data Protection Act (LPD), the European General Data Protection Regulation (GDPR), and other applicable privacy laws, Dainamics implements the processing of personal data. Users are informed of their rights of access, rectification, deletion, and opposition. To exercise these rights, you may contact our customer service department at <a href="mailto:info@dainamics.ch" className="text-dainamics-primary hover:underline">info@dainamics.ch</a>. Certain data may be shared with partners for prospecting purposes, subject to prior consent.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">Cookies and Connection</h3>
                    <p className="leading-relaxed text-justify mb-4">
                      HMF Corporation SA uses cookies to enhance the user experience. These cookies may include session identification information, language preferences, and other settings. Users can manage their cookie preferences by adjusting their browser settings, with the option of disabling or enabling cookies according to their needs. For further information, please consult the dedicated page on the Swiss Federal Data Protection and Information Commissioner (FDPIC) website: <a href="https://www.edoeb.admin.ch" className="text-dainamics-primary hover:underline" target="_blank" rel="noopener noreferrer">www.edoeb.admin.ch</a>.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-dainamics-primary mb-3">Hyperlinks</h3>
                    <p className="leading-relaxed text-justify">
                      The hypertext links present on the site may lead to external resources for which HMF Corporation SA declines all responsibility. The establishment of hypertext links to this site requires the express authorization of HMF Corporation SA and may be withdrawn at any time on request.
                    </p>
                  </section>

                  <Separator className="bg-dainamics-light/20" />

                  <div className="text-center space-y-2">
                    <p className="font-semibold text-dainamics-light">HMF Corporation SA - Fribourg, Switzerland</p>
                    <p className="text-dainamics-light/80">Last updated: May 20, 2025</p>
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
