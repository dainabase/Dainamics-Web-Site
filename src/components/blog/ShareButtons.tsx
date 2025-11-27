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
  ChevronUp
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
  mailtoHref?: string;
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

// Generate mailto URL
const generateMailtoUrl = (title: string, url: string, excerpt?: string): string => {
  const subject = encodeURIComponent(`Article intéressant : ${title}`);
  const body = encodeURIComponent(
    `Bonjour,\n\nJe souhaitais partager cet article avec vous :\n\n${title}\n\n${excerpt || ''}\n\nLire l'article : ${url}\n\n---\nPartagé depuis le blog DAINAMICS`
  );
  return `mailto:?subject=${subject}&body=${body}`;
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

  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const mailtoUrl = generateMailtoUrl(title, shareUrl, excerpt);

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
      color: 'bg-gray-600',
      hoverColor: 'hover:bg-gray-700',
      action: () => {},
      isEmail: true,
      mailtoHref: mailtoUrl
    }
  ];

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
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
        // User cancelled or error
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

        {/* Quick share icons */}
        <div className="hidden sm:flex items-center gap-1.5">
          {shareOptions.slice(0, 4).map((option) => {
            // For email, use anchor tag
            if (option.isEmail && option.mailtoHref) {
              return (
                <a
                  key={option.id}
                  href={option.mailtoHref}
                  className={`p-2.5 rounded-xl ${option.color} ${option.hoverColor} text-white transition-all hover:scale-110`}
                  title={option.name}
                >
                  <option.icon className="w-4 h-4" />
                </a>
              );
            }
            return (
              <button
                key={option.id}
                onClick={() => option.action(title, shareUrl, excerpt)}
                className={`p-2.5 rounded-xl ${option.color} ${option.hoverColor} text-white transition-all hover:scale-110`}
                title={option.name}
              >
                <option.icon className="w-4 h-4" />
              </button>
            );
          })}
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
          mailtoUrl={mailtoUrl}
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

                {/* Social icons - first 5 */}
                {shareOptions.slice(0, 5).map((option) => {
                  // For email, use anchor tag
                  if (option.isEmail && option.mailtoHref) {
                    return (
                      <a
                        key={option.id}
                        href={option.mailtoHref}
                        className={`p-3 rounded-xl ${option.color} ${option.hoverColor} text-white transition-all hover:scale-110`}
                        title={option.name}
                      >
                        <option.icon className="w-5 h-5" />
                      </a>
                    );
                  }
                  return (
                    <button
                      key={option.id}
                      onClick={() => option.action(title, shareUrl, excerpt)}
                      className={`p-3 rounded-xl ${option.color} ${option.hoverColor} text-white transition-all hover:scale-110`}
                      title={option.name}
                    >
                      <option.icon className="w-5 h-5" />
                    </button>
                  );
                })}

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
          mailtoUrl={mailtoUrl}
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
        mailtoUrl={mailtoUrl}
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
  mailtoUrl: string;
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
  mailtoUrl
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
                <h3 className="text-xl font-bold text-white">Partager l'article</h3>
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
              {/* Social share grid - 3 columns */}
              <div>
                <p className="text-sm font-medium text-gray-400 mb-3">Réseaux sociaux</p>
                <div className="grid grid-cols-3 gap-3">
                  {shareOptions.map((option) => {
                    // For email, use anchor tag
                    if (option.isEmail) {
                      return (
                        <a
                          key={option.id}
                          href={mailtoUrl}
                          onClick={onClose}
                          className={`flex flex-col items-center gap-2 p-4 rounded-xl ${option.color} ${option.hoverColor} text-white transition-all hover:scale-105`}
                        >
                          <option.icon className="w-6 h-6" />
                          <span className="text-xs font-medium">{option.name}</span>
                        </a>
                      );
                    }
                    return (
                      <button
                        key={option.id}
                        onClick={() => {
                          option.action(title, url, excerpt);
                          onClose();
                        }}
                        className={`flex flex-col items-center gap-2 p-4 rounded-xl ${option.color} ${option.hoverColor} text-white transition-all hover:scale-105`}
                      >
                        <option.icon className="w-6 h-6" />
                        <span className="text-xs font-medium">{option.name}</span>
                      </button>
                    );
                  })}
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
