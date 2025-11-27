import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  Link2,
  Check,
  Printer,
  QrCode,
  X,
  ChevronUp,
  Eye,
  Send,
  ExternalLink
} from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
  excerpt?: string;
  variant?: 'inline' | 'floating' | 'modal';
  showLabels?: boolean;
  className?: string;
}

interface ShareOption {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  hoverColor: string;
  action: (title: string, url: string, excerpt?: string) => void;
  isEmail?: boolean;
}

// WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Telegram icon component
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

// Reddit icon component
const RedditIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
);

// Pinterest icon component
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
  </svg>
);

// Gmail icon component
const GmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

// Outlook icon component  
const OutlookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 7.387v10.478c0 .23-.08.424-.238.576-.158.154-.352.23-.58.23h-8.547v-6.959l1.6 1.178c.108.085.237.127.388.127.152 0 .283-.042.391-.127l6.88-5.09c.062-.045.113-.097.152-.158.038-.06.057-.122.057-.186v-.07c0-.063-.02-.12-.057-.17-.038-.05-.087-.09-.147-.118l-.238-.119a.633.633 0 00-.28-.062h-.094l-.27.117-7.343 5.078-1.095.754-1.094-.754-7.343-5.078-.27-.117h-.094a.633.633 0 00-.28.062l-.237.119c-.06.028-.109.068-.147.117-.038.05-.057.108-.057.17v.071c0 .064.019.125.057.186.039.061.09.113.152.158l6.88 5.09c.108.085.239.127.39.127.152 0 .28-.042.388-.127l1.6-1.178v6.96H.818c-.228 0-.422-.077-.58-.23-.158-.153-.238-.347-.238-.577V7.387L0 7.29v-.42l.818-.39 7.09-3.54 3.91 2.694 3.91-2.693 7.09 3.538.818.39v.42l-.637.098zM8.076 16.611c.67.328 1.437.492 2.3.492.863 0 1.629-.164 2.3-.492.67-.328 1.196-.791 1.578-1.389.382-.597.574-1.29.574-2.078 0-.788-.192-1.481-.574-2.078-.382-.598-.908-1.06-1.579-1.39-.67-.327-1.436-.49-2.299-.49-.863 0-1.63.163-2.3.49-.67.33-1.196.792-1.578 1.39-.382.597-.574 1.29-.574 2.078 0 .788.192 1.481.574 2.078.382.598.908 1.061 1.578 1.39zm.832-4.746c.313-.481.767-.721 1.362-.721.594 0 1.046.24 1.356.721.309.481.464 1.072.464 1.773 0 .702-.155 1.293-.464 1.773-.31.48-.762.72-1.356.72-.595 0-1.049-.24-1.362-.72-.313-.48-.47-1.071-.47-1.773 0-.701.157-1.292.47-1.773z"/>
  </svg>
);

// Yahoo icon component
const YahooIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M10.816 8.193l-3.604 8.24h2.592l.904-2.176h3.136l.912 2.176h2.592l-3.6-8.24h-2.932zm1.472 2.24l.984 2.368h-1.968l.984-2.368zM24 5.457v13.086c0 .904-.732 1.636-1.636 1.636H1.636A1.636 1.636 0 0 1 0 18.543V5.457c0-.904.732-1.636 1.636-1.636h20.728c.904 0 1.636.732 1.636 1.636zM5.552 8.193H2.96l2.016 4.752L2.752 17.6h2.592l1.328-2.88L8 17.6h2.592l-2.224-4.656 2.016-4.752H7.792L6.672 10.4l-1.12-2.208zm11.2 0H14.16l2.016 4.752-2.224 4.656h2.592l1.328-2.88 1.328 2.88h2.592l-2.224-4.656 2.016-4.752h-2.592l-1.12 2.208-1.12-2.208z"/>
  </svg>
);

// Generate email content
const generateEmailContent = (title: string, url: string, excerpt?: string) => {
  const subject = `Article intéressant : ${title}`;
  const body = `Bonjour,

Je souhaitais partager cet article avec vous :

${title}

${excerpt || ''}

Lire l'article : ${url}

---
Partagé depuis le blog DAINAMICS`;
  
  return { subject, body };
};

// Generate mailto URL
const generateMailtoUrl = (title: string, url: string, excerpt?: string): string => {
  const { subject, body } = generateEmailContent(title, url, excerpt);
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

// Generate webmail URLs
const generateWebmailUrls = (title: string, url: string, excerpt?: string) => {
  const { subject, body } = generateEmailContent(title, url, excerpt);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  
  return {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&su=${encodedSubject}&body=${encodedBody}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?subject=${encodedSubject}&body=${encodedBody}`,
    yahoo: `https://compose.mail.yahoo.com/?subject=${encodedSubject}&body=${encodedBody}`,
    mailto: generateMailtoUrl(title, url, excerpt)
  };
};

const ShareButtons = ({
  title,
  url,
  excerpt = '',
  variant = 'inline',
  showLabels = false,
  className = ''
}: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [showEmailPreview, setShowEmailPreview] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const webmailUrls = generateWebmailUrls(title, shareUrl, excerpt);
  const emailContent = generateEmailContent(title, shareUrl, excerpt);

  // Track scroll for floating variant
  useEffect(() => {
    if (variant !== 'floating') return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setShowFloating(scrollY > 400);
      setIsAtBottom(scrollY + windowHeight > documentHeight - 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [variant]);

  const shareOptions: ShareOption[] = [
    {
      id: 'twitter',
      name: 'Twitter / X',
      icon: Twitter,
      color: 'bg-black',
      hoverColor: 'hover:bg-gray-900',
      action: () => {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
          '_blank',
          'width=600,height=400'
        );
      }
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-[#0A66C2]',
      hoverColor: 'hover:bg-[#004182]',
      action: () => {
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
          '_blank',
          'width=600,height=600'
        );
      }
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-[#1877F2]',
      hoverColor: 'hover:bg-[#0d65d9]',
      action: () => {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
          '_blank',
          'width=600,height=400'
        );
      }
    },
    {
      id: 'reddit',
      name: 'Reddit',
      icon: RedditIcon,
      color: 'bg-[#FF4500]',
      hoverColor: 'hover:bg-[#cc3700]',
      action: () => {
        window.open(
          `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
          '_blank',
          'width=600,height=600'
        );
      }
    },
    {
      id: 'pinterest',
      name: 'Pinterest',
      icon: PinterestIcon,
      color: 'bg-[#E60023]',
      hoverColor: 'hover:bg-[#ad001a]',
      action: () => {
        const description = encodeURIComponent(excerpt || title);
        window.open(
          `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${description}`,
          '_blank',
          'width=600,height=600'
        );
      }
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      color: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#1da851]',
      action: () => {
        window.open(
          `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
          '_blank'
        );
      }
    },
    {
      id: 'telegram',
      name: 'Telegram',
      icon: TelegramIcon,
      color: 'bg-[#0088cc]',
      hoverColor: 'hover:bg-[#006699]',
      action: () => {
        window.open(
          `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
          '_blank'
        );
      }
    },
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      color: 'bg-gradient-to-r from-orange-500 to-red-500',
      hoverColor: 'hover:from-orange-600 hover:to-red-600',
      action: () => {
        setShowEmailOptions(true);
      },
      isEmail: true
    }
  ];

  // Options principales pour inline (les plus populaires)
  const inlineOptions = shareOptions.filter(o => 
    ['twitter', 'linkedin', 'facebook', 'reddit'].includes(o.id)
  );

  // Options pour floating sidebar (6 premières)
  const floatingOptions = shareOptions.slice(0, 6);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [shareUrl]);

  const handleNativeShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: excerpt,
          url: shareUrl
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setShowModal(true);
        }
      }
    } else {
      setShowModal(true);
    }
  }, [title, excerpt, shareUrl]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // Generate QR Code URL using QR Server API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedUrl}&bgcolor=0A0A0F&color=FFFFFF&format=svg`;

  // Inline variant - simple row of buttons
  if (variant === 'inline') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {/* Primary share button */}
        <button
          onClick={handleNativeShare}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dainamics-primary/20 hover:bg-dainamics-primary/30 border border-dainamics-primary/30 text-white transition-all hover:scale-105"
        >
          <Share2 className="w-4 h-4" />
          {showLabels && <span className="text-sm font-medium">Partager</span>}
        </button>

        {/* Quick share icons - principales plateformes */}
        <div className="hidden sm:flex items-center gap-1.5">
          {inlineOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => option.action(title, shareUrl, excerpt)}
              className={`p-2.5 rounded-xl ${option.color} ${option.hoverColor} text-white transition-all hover:scale-110`}
              title={option.name}
            >
              <option.icon className="w-4 h-4" />
            </button>
          ))}
        </div>

        {/* Copy link */}
        <button
          onClick={copyToClipboard}
          className={`p-2.5 rounded-xl transition-all hover:scale-110 ${
            copied 
              ? 'bg-green-500 text-white' 
              : 'bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white'
          }`}
          title={copied ? 'Lien copié !' : 'Copier le lien'}
        >
          {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
        </button>

        {/* Modal */}
        <ShareModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={title}
          url={shareUrl}
          excerpt={excerpt}
          shareOptions={shareOptions}
          copyToClipboard={copyToClipboard}
          copied={copied}
          handlePrint={handlePrint}
          qrCodeUrl={qrCodeUrl}
          showQR={showQR}
          setShowQR={setShowQR}
          webmailUrls={webmailUrls}
          emailContent={emailContent}
          showEmailPreview={showEmailPreview}
          setShowEmailPreview={setShowEmailPreview}
          showEmailOptions={showEmailOptions}
          setShowEmailOptions={setShowEmailOptions}
        />
      </div>
    );
  }

  // Floating variant - fixed sidebar
  if (variant === 'floating') {
    return (
      <>
        <AnimatePresence>
          {showFloating && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={`fixed left-4 z-40 transition-all duration-300 ${
                isAtBottom ? 'bottom-24' : 'top-1/2 -translate-y-1/2'
              } ${className}`}
              data-hide-print="true"
            >
              <div className="flex flex-col gap-2 p-2 rounded-2xl bg-dainamics-background/90 backdrop-blur-xl border border-white/10 shadow-2xl">
                {/* Share button */}
                <button
                  onClick={handleNativeShare}
                  className="p-3 rounded-xl bg-dainamics-primary hover:bg-dainamics-primary/80 text-white transition-all hover:scale-110"
                  title="Partager"
                >
                  <Share2 className="w-5 h-5" />
                </button>

                <div className="w-full h-px bg-white/10" />

                {/* Social icons - 6 principales */}
                {floatingOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      if (option.isEmail) {
                        setShowModal(true);
                        setShowEmailOptions(true);
                      } else {
                        option.action(title, shareUrl, excerpt);
                      }
                    }}
                    className={`p-3 rounded-xl ${option.color} ${option.hoverColor} text-white transition-all hover:scale-110`}
                    title={option.name}
                  >
                    <option.icon className="w-5 h-5" />
                  </button>
                ))}

                <div className="w-full h-px bg-white/10" />

                {/* Copy link */}
                <button
                  onClick={copyToClipboard}
                  className={`p-3 rounded-xl transition-all hover:scale-110 ${
                    copied 
                      ? 'bg-green-500 text-white' 
                      : 'bg-white/10 hover:bg-white/20 text-gray-400'
                  }`}
                  title={copied ? 'Copié !' : 'Copier le lien'}
                >
                  {copied ? <Check className="w-5 h-5" /> : <Link2 className="w-5 h-5" />}
                </button>

                {/* More options - opens popup */}
                <button
                  onClick={() => setShowModal(true)}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                  title="Plus d'options"
                >
                  <ChevronUp className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal */}
        <ShareModal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setShowEmailOptions(false);
            setShowEmailPreview(false);
          }}
          title={title}
          url={shareUrl}
          excerpt={excerpt}
          shareOptions={shareOptions}
          copyToClipboard={copyToClipboard}
          copied={copied}
          handlePrint={handlePrint}
          qrCodeUrl={qrCodeUrl}
          showQR={showQR}
          setShowQR={setShowQR}
          webmailUrls={webmailUrls}
          emailContent={emailContent}
          showEmailPreview={showEmailPreview}
          setShowEmailPreview={setShowEmailPreview}
          showEmailOptions={showEmailOptions}
          setShowEmailOptions={setShowEmailOptions}
        />
      </>
    );
  }

  // Modal variant - just the trigger button
  return (
    <div className={className}>
      <button
        onClick={handleNativeShare}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all"
      >
        <Share2 className="w-4 h-4" />
        {showLabels && <span className="text-sm">Partager</span>}
      </button>

      <ShareModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setShowEmailOptions(false);
          setShowEmailPreview(false);
        }}
        title={title}
        url={shareUrl}
        excerpt={excerpt}
        shareOptions={shareOptions}
        copyToClipboard={copyToClipboard}
        copied={copied}
        handlePrint={handlePrint}
        qrCodeUrl={qrCodeUrl}
        showQR={showQR}
        setShowQR={setShowQR}
        webmailUrls={webmailUrls}
        emailContent={emailContent}
        showEmailPreview={showEmailPreview}
        setShowEmailPreview={setShowEmailPreview}
        showEmailOptions={showEmailOptions}
        setShowEmailOptions={setShowEmailOptions}
      />
    </div>
  );
};

// Modal component for all sharing options
interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
  excerpt?: string;
  shareOptions: ShareOption[];
  copyToClipboard: () => void;
  copied: boolean;
  handlePrint: () => void;
  qrCodeUrl: string;
  showQR: boolean;
  setShowQR: (show: boolean) => void;
  webmailUrls: {
    gmail: string;
    outlook: string;
    yahoo: string;
    mailto: string;
  };
  emailContent: {
    subject: string;
    body: string;
  };
  showEmailPreview: boolean;
  setShowEmailPreview: (show: boolean) => void;
  showEmailOptions: boolean;
  setShowEmailOptions: (show: boolean) => void;
}

const ShareModal = ({
  isOpen,
  onClose,
  title,
  url,
  excerpt,
  shareOptions,
  copyToClipboard,
  copied,
  handlePrint,
  qrCodeUrl,
  showQR,
  setShowQR,
  webmailUrls,
  emailContent,
  showEmailPreview,
  setShowEmailPreview,
  showEmailOptions,
  setShowEmailOptions
}: ShareModalProps) => {
  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
          data-hide-print="true"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-dainamics-background border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white/10 bg-dainamics-background/95 backdrop-blur-sm">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {showEmailOptions ? 'Partager par Email' : 'Partager l\'article'}
                </h3>
                <p className="text-sm text-gray-400 mt-1 line-clamp-1">{title}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Email Options Panel */}
              <AnimatePresence>
                {showEmailOptions && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 overflow-hidden"
                  >
                    {/* Preview Button */}
                    <button
                      onClick={() => setShowEmailPreview(!showEmailPreview)}
                      className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                        showEmailPreview
                          ? 'bg-dainamics-primary/20 border-dainamics-primary/40 text-dainamics-primary'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Eye className="w-5 h-5" />
                      <span className="font-medium">Aperçu de l'email</span>
                    </button>

                    {/* Email Preview */}
                    <AnimatePresence>
                      {showEmailPreview && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-3">
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Sujet</p>
                              <p className="text-sm text-white font-medium">{emailContent.subject}</p>
                            </div>
                            <div className="border-t border-white/10 pt-3">
                              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Message</p>
                              <pre className="text-sm text-gray-300 whitespace-pre-wrap font-sans">
                                {emailContent.body}
                              </pre>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Email Client Options */}
                    <div>
                      <p className="text-sm font-medium text-gray-400 mb-3">Choisissez votre client email</p>
                      <div className="grid grid-cols-2 gap-3">
                        {/* Gmail */}
                        <a
                          href={webmailUrls.gmail}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl bg-[#EA4335]/10 hover:bg-[#EA4335]/20 border border-[#EA4335]/30 text-white transition-all hover:scale-[1.02]"
                          onClick={onClose}
                        >
                          <div className="w-10 h-10 rounded-lg bg-[#EA4335] flex items-center justify-center">
                            <GmailIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <span className="font-medium block">Gmail</span>
                            <span className="text-xs text-gray-400">Ouvrir dans Gmail</span>
                          </div>
                        </a>

                        {/* Outlook */}
                        <a
                          href={webmailUrls.outlook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl bg-[#0078D4]/10 hover:bg-[#0078D4]/20 border border-[#0078D4]/30 text-white transition-all hover:scale-[1.02]"
                          onClick={onClose}
                        >
                          <div className="w-10 h-10 rounded-lg bg-[#0078D4] flex items-center justify-center">
                            <OutlookIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <span className="font-medium block">Outlook</span>
                            <span className="text-xs text-gray-400">Ouvrir dans Outlook</span>
                          </div>
                        </a>

                        {/* Yahoo */}
                        <a
                          href={webmailUrls.yahoo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl bg-[#6001D2]/10 hover:bg-[#6001D2]/20 border border-[#6001D2]/30 text-white transition-all hover:scale-[1.02]"
                          onClick={onClose}
                        >
                          <div className="w-10 h-10 rounded-lg bg-[#6001D2] flex items-center justify-center">
                            <YahooIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <span className="font-medium block">Yahoo Mail</span>
                            <span className="text-xs text-gray-400">Ouvrir dans Yahoo</span>
                          </div>
                        </a>

                        {/* Local Email Client (mailto) */}
                        <a
                          href={webmailUrls.mailto}
                          className="flex items-center gap-3 p-3 rounded-xl bg-gray-600/10 hover:bg-gray-600/20 border border-gray-600/30 text-white transition-all hover:scale-[1.02]"
                          onClick={onClose}
                        >
                          <div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
                            <Mail className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <span className="font-medium block">App locale</span>
                            <span className="text-xs text-gray-400">Mail, Thunderbird...</span>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Back button */}
                    <button
                      onClick={() => setShowEmailOptions(false)}
                      className="w-full text-sm text-gray-400 hover:text-white transition-colors py-2"
                    >
                      ← Retour aux options de partage
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Social share grid - Only show when not in email options */}
              {!showEmailOptions && (
                <>
                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-3">Réseaux sociaux</p>
                    <div className="grid grid-cols-4 gap-3">
                      {shareOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            if (option.isEmail) {
                              setShowEmailOptions(true);
                            } else {
                              option.action(title, url, excerpt);
                              onClose();
                            }
                          }}
                          className={`flex flex-col items-center gap-2 p-3 rounded-xl ${option.color} ${option.hoverColor} text-white transition-all hover:scale-105`}
                        >
                          <option.icon className="w-5 h-5" />
                          <span className="text-[10px] font-medium text-center leading-tight">{option.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Copy link */}
                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-3">Copier le lien</p>
                    <div className="flex gap-2">
                      <div className="flex-1 px-4 py-3 bg-white/5 rounded-xl border border-white/10 text-gray-400 text-sm truncate">
                        {url}
                      </div>
                      <button
                        onClick={copyToClipboard}
                        className={`px-4 py-3 rounded-xl font-medium transition-all ${
                          copied
                            ? 'bg-green-500 text-white'
                            : 'bg-dainamics-primary hover:bg-dainamics-primary/80 text-white'
                        }`}
                      >
                        {copied ? (
                          <span className="flex items-center gap-2">
                            <Check className="w-4 h-4" />
                            Copié
                          </span>
                        ) : (
                          'Copier'
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Additional options */}
                  <div className="flex gap-3">
                    {/* QR Code */}
                    <button
                      onClick={() => setShowQR(!showQR)}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                        showQR
                          ? 'bg-dainamics-secondary/20 border-dainamics-secondary/40 text-dainamics-secondary'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <QrCode className="w-5 h-5" />
                      <span className="text-sm font-medium">QR Code</span>
                    </button>

                    {/* Print */}
                    <button
                      onClick={handlePrint}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <Printer className="w-5 h-5" />
                      <span className="text-sm font-medium">Imprimer</span>
                    </button>
                  </div>

                  {/* QR Code display */}
                  <AnimatePresence>
                    {showQR && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col items-center p-6 bg-white rounded-2xl">
                          <img
                            src={qrCodeUrl}
                            alt="QR Code pour partager l'article"
                            className="w-48 h-48"
                            style={{ filter: 'invert(1)' }}
                          />
                          <p className="text-sm text-gray-600 mt-3 text-center">
                            Scannez pour accéder à l'article
                          </p>
                          <a 
                            href={qrCodeUrl.replace('svg', 'png')} 
                            download={`qr-${title.slice(0, 30).replace(/\s/g, '-')}.png`}
                            className="mt-3 text-xs text-dainamics-primary hover:underline"
                          >
                            Télécharger le QR Code
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 px-6 py-4 bg-white/[0.02] border-t border-white/10 backdrop-blur-sm">
              <p className="text-xs text-gray-500 text-center">
                Partagé depuis le blog DAINAMICS • IA &amp; Automatisation
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShareButtons;
