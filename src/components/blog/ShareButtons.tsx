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
  const [shareNotification, setShareNotification] = useState<string | null>(null);

  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  // Show notification after share
  const showShareNotif = useCallback((platform: string) => {
    setShareNotification(`Partagé sur ${platform}`);
    setTimeout(() => setShareNotification(null), 2000);
  }, []);

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

  // Email handler - Robust method for Safari/Mac
  const handleEmailShare = useCallback(() => {
    const cleanTitle = title
      .replace(/[éèêë]/g, 'e')
      .replace(/[àâäã]/g, 'a')
      .replace(/[ùûü]/g, 'u')
      .replace(/[îïì]/g, 'i')
      .replace(/[ôöò]/g, 'o')
      .replace(/[ç]/g, 'c');

    const subject = `Article interessant : ${cleanTitle}`;
    const body = `Bonjour,

Je souhaitais partager cet article avec vous :

${title}

${excerpt ? excerpt.substring(0, 200) + (excerpt.length > 200 ? '...' : '') : ''}

Lire l'article : ${shareUrl}

---
DAINAMICS - Intelligence Artificielle et Automatisation pour PME
https://dainamics.ch`;

    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Create a real anchor element and click it - works on Safari/Mac
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showShareNotif('Email');
  }, [title, excerpt, shareUrl, showShareNotif]);

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
          'width=600,height=400,noopener,noreferrer'
        );
        showShareNotif('Twitter');
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
          'width=600,height=600,noopener,noreferrer'
        );
        showShareNotif('LinkedIn');
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
          'width=600,height=400,noopener,noreferrer'
        );
        showShareNotif('Facebook');
      }
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      color: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#1da851]',
      action: () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappUrl = isMobile
          ? `whatsapp://send?text=${encodedTitle}%20${encodedUrl}`
          : `https://web.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        showShareNotif('WhatsApp');
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
          '_blank',
          'noopener,noreferrer'
        );
        showShareNotif('Telegram');
      }
    },
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      color: 'bg-gradient-to-br from-orange-500 to-red-500',
      hoverColor: 'hover:from-orange-600 hover:to-red-600',
      action: handleEmailShare
    },
    {
      id: 'reddit',
      name: 'Reddit',
      icon: RedditIcon,
      color: 'bg-[#FF4500]',
      hoverColor: 'hover:bg-[#cc3700]',
      action: () => {
        window.open(
          `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
          '_blank',
          'width=600,height=600,noopener,noreferrer'
        );
        showShareNotif('Reddit');
      }
    },
    {
      id: 'pinterest',
      name: 'Pinterest',
      icon: PinterestIcon,
      color: 'bg-[#E60023]',
      hoverColor: 'hover:bg-[#ad001a]',
      action: () => {
        window.open(
          `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
          '_blank',
          'width=600,height=600,noopener,noreferrer'
        );
        showShareNotif('Pinterest');
      }
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
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
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
        showShareNotif('appareil');
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setShowModal(true);
        }
      }
    } else {
      setShowModal(true);
    }
  }, [title, excerpt, shareUrl, showShareNotif]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // Generate QR Code URL
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedUrl}&bgcolor=0A0A0F&color=FFFFFF&format=svg`;

  // Notification Toast
  const NotificationToast = () => (
    <AnimatePresence>
      {shareNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 bg-green-500 text-white rounded-full shadow-lg flex items-center gap-2"
        >
          <Check className="w-4 h-4" />
          <span className="font-medium">{shareNotification}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Inline variant
  if (variant === 'inline') {
    return (
      <>
        <div className={`flex items-center gap-2 ${className}`}>
          <button
            onClick={handleNativeShare}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dainamics-primary/20 hover:bg-dainamics-primary/30 border border-dainamics-primary/30 text-white transition-all hover:scale-105"
          >
            <Share2 className="w-4 h-4" />
            {showLabels && <span className="text-sm font-medium">Partager</span>}
          </button>

          <div className="hidden sm:flex items-center gap-1.5">
            {shareOptions.slice(0, 4).map((option) => (
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
          />
        </div>
        <NotificationToast />
      </>
    );
  }

  // Floating variant
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
                <button
                  onClick={handleNativeShare}
                  className="p-3 rounded-xl bg-dainamics-primary hover:bg-dainamics-primary/80 text-white transition-all hover:scale-110"
                  title="Partager"
                >
                  <Share2 className="w-5 h-5" />
                </button>

                <div className="w-full h-px bg-white/10" />

                {shareOptions.slice(0, 5).map((option) => (
                  <button
                    key={option.id}
                    onClick={() => option.action(title, shareUrl, excerpt)}
                    className={`p-3 rounded-xl ${option.color} ${option.hoverColor} text-white transition-all hover:scale-110`}
                    title={option.name}
                  >
                    <option.icon className="w-5 h-5" />
                  </button>
                ))}

                <div className="w-full h-px bg-white/10" />

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
        />

        <NotificationToast />
      </>
    );
  }

  // Modal variant
  return (
    <>
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
        />
      </div>
      <NotificationToast />
    </>
  );
};

// Modal component
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
  setShowQR
}: ShareModalProps) => {
  const [emailPreview, setEmailPreview] = useState(false);

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

  useEffect(() => {
    if (!isOpen) {
      setEmailPreview(false);
      setShowQR(false);
    }
  }, [isOpen, setShowQR]);

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
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-dainamics-background border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            data-hide-print="true"
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
              {/* Social share grid */}
              <div>
                <p className="text-sm font-medium text-gray-400 mb-3">Réseaux sociaux</p>
                <div className="grid grid-cols-4 gap-3">
                  {shareOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => option.action(title, url, excerpt)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl ${option.color} ${option.hoverColor} text-white transition-all hover:scale-105`}
                    >
                      <option.icon className="w-5 h-5" />
                      <span className="text-[10px] font-medium truncate w-full text-center">
                        {option.name.split(' ')[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Email Preview Toggle */}
              <div>
                <button
                  onClick={() => setEmailPreview(!emailPreview)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-gray-400 hover:text-white transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span className="text-sm font-medium">Aperçu de l'email</span>
                  </div>
                  <ExternalLink className={`w-4 h-4 transition-transform ${emailPreview ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {emailPreview && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 p-4 bg-white/5 rounded-xl border border-white/10 text-sm">
                        <div className="mb-3 pb-3 border-b border-white/10">
                          <p className="text-gray-500 text-xs mb-1">Objet :</p>
                          <p className="text-white">Article interessant : {title}</p>
                        </div>
                        <div className="space-y-2 text-gray-400">
                          <p>Bonjour,</p>
                          <p>Je souhaitais partager cet article avec vous :</p>
                          <p className="text-dainamics-primary font-medium">"{title}"</p>
                          {excerpt && (
                            <p className="text-gray-500 italic text-xs">
                              "{excerpt.slice(0, 100)}..."
                            </p>
                          )}
                          <p className="text-dainamics-secondary underline">{url}</p>
                          <p className="text-gray-500 text-xs mt-4 pt-3 border-t border-white/10">
                            Partage depuis le blog DAINAMICS
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Copy link */}
              <div>
                <p className="text-sm font-medium text-gray-400 mb-3">Copier le lien</p>
                <div className="flex gap-2">
                  <div className="flex-1 px-4 py-3 bg-white/5 rounded-xl border border-white/10 text-gray-400 text-sm truncate font-mono">
                    {url}
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className={`px-4 py-3 rounded-xl font-medium transition-all min-w-[100px] ${
                      copied
                        ? 'bg-green-500 text-white'
                        : 'bg-dainamics-primary hover:bg-dainamics-primary/80 text-white'
                    }`}
                  >
                    {copied ? (
                      <span className="flex items-center justify-center gap-2">
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
                Partage depuis le blog DAINAMICS - IA et Automatisation pour PME
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShareButtons;
